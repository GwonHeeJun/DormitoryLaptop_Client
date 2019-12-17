import React, { Component } from "react";
import BackImage from "assets/image/backImage.png";
import "./MainContainer.scss";
import Choose from "components/Choose/MainChoose/Choose";
import { connect } from "react-redux";
import Login from "components/Login/Login";
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
            <Login title="학생"/>
          </MainTemplete>
        );
      case "management":
        return (
          <MainTemplete>
            <ManagementChoose />
          </MainTemplete>
        );
      case "consultant":
        return (
          <MainTemplete>
            <Login title="자치위원"/>
          </MainTemplete>
        );
      case "resident":
        return (
          <MainTemplete>
            <Login title="사감"/>
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
