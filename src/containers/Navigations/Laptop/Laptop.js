import React, { Component, Fragment } from "react";
import "./Laptop.scss";
import ServiceBanner from "components/ServiceBanner/ServiceBanner";
import LaptopList from "components/LaptopList/LaptopList";
import LaptopDesc from "components/LaptopDesc/LaptopDesc";
import { myLaptop, roomDetail } from "lib/laptop";
import { ReactComponent as List } from "assets/image/list.svg";
import { ReactComponent as Write } from "assets/image/write.svg";
import AdminLaptop from "components/Admin/AdminLaptop/AdminLaptop";
import { connect } from "react-redux";
import { changeAdminSawLaptop } from "store/Laptop/Laptop.store";

class Laptop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myRoom: "",
      mySeat: 0,
      laptopDetail: []
    };
  }

  componentDidMount() {
    myLaptop()
      .then(res =>
        this.setState({ myRoom: res.data.room, mySeat: res.data.seat })
      )
      .catch(err => console.log(err));

    if (localStorage.getItem("authority") === "teacher") {
      roomDetail().then(res =>
        this.setState({
          laptopDetail: res.data.seats
        })
      );
    }
  }

  onClickChangeAdminList = (e, seeList) => {
    const { changeAdminSawLaptop } = this.props;
    e.stopPropagation();

    changeAdminSawLaptop(seeList);
  };

  render() {
    return (
      <React.Fragment>
        <h2 className="laptop-title">
          노트북 대여
          {localStorage.getItem("authority") === "manager" ? (
            <div
              className={this.props.seeList === false ? "borrow" : "unborrow"}
              onClick={e => this.onClickChangeAdminList(e, !this.props.seeList)}
            >
              {this.props.seeList === false ? (
                <Fragment>
                  <List />
                  <span>대여대장 열람</span>
                </Fragment>
              ) : (
                <Fragment>
                  <Write />
                  <span>대여 신청</span>
                </Fragment>
              )}
            </div>
          ) : null}
        </h2>
        {localStorage.getItem("authority") === "teacher" ? (
          <div className="laptop-content">
            <AdminLaptop roomDetail={this.state.laptopDetail} />
          </div>
        ) : this.props.seeList === true ? (
          <div className="laptop-content">
            <AdminLaptop roomDetail={this.state.laptopDetail} />
          </div>
        ) : (
          <div className="laptop-content">
            <div className="laptop-content__header">
              <ServiceBanner
                banner="laptop"
                myRoom={this.state.myRoom}
                mySeat={this.state.mySeat}
              />
            </div>
            <div className="laptop-content__body">
              <div className="laptop-content__body--list">
                <LaptopList />
              </div>
              <div className="laptop-content__body--seat">
                <LaptopDesc />
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    seeList: state.laptop.seeList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeAdminSawLaptop: seeList => dispatch(changeAdminSawLaptop(seeList))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Laptop);
