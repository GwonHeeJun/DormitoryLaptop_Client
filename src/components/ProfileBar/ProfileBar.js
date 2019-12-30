import React, { Component } from "react";
import { ReactComponent as Ring } from "assets/image/ring.svg";
import { ReactComponent as Logout } from "assets/image/logout.svg";
import { ReactComponent as Limit } from "assets/image/limit.svg";
import { ReactComponent as ManProfile } from "assets/image/manProfile.svg";
import "./ProfileBar.scss";
import { UserInfo } from "lib/auth";
import { Redirect } from "react-router-dom";

export default class ProfileBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      grade: "",
      class: "",
      point: 0,
      isLogout: false
    };
  }

  componentDidMount() {
    UserInfo()
      .then(res =>
        this.setState({
          name: res.data.name,
          grade: res.data.grade,
          class: res.data.class,
          point: res.data.point
        })
      )
      .catch(err => console.log(err));
  }
  
  onClickLogoutFunc() {
    localStorage.removeItem('gsm-token');
    localStorage.removeItem('authority');
    this.setState({ isLogout : true })
  }

  render() {
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

    if (this.state.isLogout) {
      return <Redirect to="/" />
    }
    return (
      <div className="c-profile-bar">
        <div className="c-profile-bar__header">
          <div className="c-profile-bar__header--notice">
            <Ring />
            <span className="new" />
          </div>
          <div className="c-profile-bar__header--logout" onClick={() => this.onClickLogoutFunc()}>
            <Logout />
            <span>로그아웃</span>
          </div>
        </div>
        <div className="c-profile-bar__content">
          <div className="c-profile-bar__content--user">
            <ManProfile />
            <span className="name">{this.state.name}</span>
            <span className="class">{this.state.grade}-{this.state.class}</span>
          </div>
          <div className="c-profile-bar__content--grade">
            <Limit />
            <span className="title">상벌점</span>
            <div className="bar">
              <span className="bar__location" style={{ width: `${7.1 * this.state.point}` }} />
            </div>
            <span className="grade">{this.state.point}</span>
            
          </div>
        </div>
        <div className="c-profile-bar__footer">
          <span className="c-profile-bar__footer--title">이벤트</span>

          <div className="card-list">
            {this.props.mySeat === 0 ? null : (
              <div className="card-list__card-notebook">
                <div className="left">
                  <span className="left__top">
                    {nowMonth}/{nowDate} 노트북 대여
                  </span>
                  <span className="left__bottom">
                    {this.props.myRoom === "lab1"
                      ? "Lab 1"
                      : this.props.myRoom === "lab2"
                      ? "Lab 2"
                      : this.props.myRoom === "lab3"
                      ? "Lab 3"
                      : "Lab 4"}
                    실, {this.props.mySeat}번 좌석
                  </span>
                </div>
                <div className="right">
                  <span className="right__time">22:00 - 23:50</span>
                </div>
              </div>
            )}

            {/* <div
              className="card-list__card-youtube"
              style={{
                backgroundImage:
                  "url('https://img.youtube.com/vi/D1PvIWdJ8xo/0.jpg')"
              }}
            >
              <div className="left">
                <span className="left__top">12/17 기상음악 신청</span>
                <span className="left__bottom">IU(아이유) - Blueming</span>
              </div>
              <div className="right">
                <span className="right__time">7:15 - 7:19</span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="c-profile-bar__copyright">
          <p>© 2019 GSM. All Rights Reserved.</p>
          <p>
            <span>개인정보취급방침</span> | <span>이용약관</span> |{" "}
            <span>라이선스</span> | <span>Github</span>
          </p>
        </div>
      </div>
    );
  }
}
