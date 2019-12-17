import React, { Component } from "react";
import BackImage from "assets/image/backImage.png";
import "./MainContainer.scss";
import Choose from "components/Choose/MainChoose/Choose";
import { connect } from "react-redux";
import StudentLogin from "components/Student/Login/StudentLogin";
import ManagementChoose from "components/Choose/ManagementChoose/ManagementChoose";
import MainTemplete from "containers/MainTemplete/MainTemplete";

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  makeMainForms() {
    const { userType } = this.props;
    switch (userType) {
      case "":
        return (
          <MainTemplete>
            <Choose />
          </MainTemplete>
        );
      case "student":
        return (
          <MainTemplete>
            <StudentLogin />
          </MainTemplete>
        );
      case "management":
        return (
          <MainTemplete>
            <ManagementChoose />
          </MainTemplete>
        );
      case "resident":
        return (
          <MainTemplete>
            <ManagementChoose />
          </MainTemplete>
        );
      case "consultant":
        return (
          <MainTemplete>
            <ManagementChoose />
          </MainTemplete>
        );
      default:
        break;
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="main-container__forms">{this.makeMainForms()}</div>
        <div className="main-container__image-box">
          <img src={BackImage} alt="BackGroundImage" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userType: state.menu.userType
  };
};

export default connect(mapStateToProps, null)(MainContainer);
