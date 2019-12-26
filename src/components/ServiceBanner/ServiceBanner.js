import React, { Component, Fragment } from "react";
import { ReactComponent as Beta } from "assets/image/beta.svg";
import { ReactComponent as Notebook } from "assets/image/notebookPer.svg";
import "./ServiceBanner.scss";
import { laptopCancel } from "lib/laptop";
import { ReactComponent as Success } from "assets/image/success.svg";

export default class ServiceBanner extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isClicked : false,
             title : "",
             desc: ""
        }
    }

    cancelLaptopEvent() {
        laptopCancel().then(res => { this.setState({ title : res.data.title, desc: res.data.msg })}).catch(err => {});
        this.setState({
            isClicked: true
        })
    }
    

  makeComponent() {
    const { banner } = this.props;
    var today = new Date();
    var nowMonth = today.getMonth() + 1,
      nowDay = today.getDay(),
      nowDate = today.getDate();
    switch (nowDay) {
      case 1:
        nowDay = "월";
        break;
      case 2:
        nowDay = "화";
        break;
      case 3:
        nowDay = "수";
        break;
      case 4:
        nowDay = "목";
        break;
      case 5:
        nowDay = "금";
        break;
      case 6:
        nowDay = "토";
        break;
      case 7:
        nowDay = "일";
        break;
      default:
        break;
    }
    if (banner === "beta") {
      return (
        <div className="c-service-banner">
          <div className="c-service-banner__desc">
            <h2>Beta 서비스 중입니다.</h2>
            <span>정식 서비스 : 2020년 1학기 예정</span>
          </div>
          <div className="c-service-banner__icon">
            <Beta />
          </div>
        </div>
      );
    } else if (banner === "laptop") {
        
      return (
        <Fragment>
            {this.props.mySeat === 0 ? 
        <div className="c-service-banner">
        <div className="c-service-banner__desc">
          <span style={{marginTop: "0"}}>{nowMonth}월 {nowDate}일 {nowDay}요일</span>
          <h2 style={{marginTop: "10px"}}>오늘은 아직 노트북 대여를 신청하지 않았어요.</h2>
        </div>
        <div className="c-service-banner__icon">
          <Notebook style={{width: "205px", marginRight: "20px"}}/>
        </div>
      </div>
    :
        <Fragment>
        <div className="c-service-laptop">
          <div className="c-service-laptop__desc">
            <span>{nowMonth}월 {nowDate}일 {nowDay}요일</span>
            <h2>
            {this.props.myRoom === "lab1"
                ? "Lab 1"
                : this.props.myRoom === "lab2"
                ? "Lab 2"
                : this.props.myRoom === "lab3"
                ? "Lab 3"
                : "Lab 4"}
              실, {this.props.mySeat}번 좌석에 노트북 대여를 신청했어요 <small onClick={() => this.cancelLaptopEvent()}>취소</small>
            </h2>
          </div>
          <div className="c-service-laptop__icon">
            <Notebook />
          </div>
        </div>
        {this.state.isClicked ? (
            <React.Fragment>
              <div className="c-dialog" />
              <div className="c-dialog-wrapper">
                <div className="c-dialog-wrapper__box">
                  <h3>
                    {this.state.title.length === 0
                      ? "노트북 대여 신청"
                      : this.state.title}
                  </h3>
                  <p>
                      <Fragment>
                        <Success />
                        <span style={{ marginLeft: "20px" }}>
                          {this.state.desc}
                        </span>
                      </Fragment>
                  </p>
                  <div className="c-dialog-wrapper__box--buttons">
                   
                      <button
                      onClick={() => {
                        this.setState({ isClicked: false, borrowType: "" });
                        window.location.reload();
                      }}
                      >
                        확인
                      </button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : null}
          </Fragment>
    }
</Fragment>

      );

    }
  }

  render() {
    return this.makeComponent();
  }
}
