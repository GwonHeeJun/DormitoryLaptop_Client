import React, { Component } from "react";
import BackImage from "assets/image/backImage.png";
import "./MainContainer.scss";
import Choose from "components/Choose/MainChoose/Choose";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Login from "components/Login/Login";
import ManagementChoose from "components/Choose/ManagementChoose/ManagementChoose";
import MainTemplete from "containers/MainTemplete/MainTemplete";
import Register from "components/Register/Register";
import { CheckUser } from "lib/auth";

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRedirect: false
    };
  }

  makeMainForms() {
    const { userType, authType } = this.props;
    switch (userType) {
      case "":
        return (
          <MainTemplete>
            <Choose />
          </MainTemplete>
        );
      case "management":
        return (
          <MainTemplete>
            <ManagementChoose />
          </MainTemplete>
        );
      default:
        break;
    }
    switch (authType) {
      case "login":
        return (
          <MainTemplete>
            <Login title={userType} />
          </MainTemplete>
        );
      case "register":
        return (
          <MainTemplete>
            <Register title={userType} />
          </MainTemplete>
        );
      default:
        break;
    }
  }

  componentDidMount() {
    if (localStorage.getItem("gsm-token")) {
      CheckUser(localStorage.getItem("gsm-token"))
        .then(res => {
          localStorage.setItem("gsm-token", res.data.token);
          this.setState({
            isRedirect: true
          });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/home" />;
    }
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
    userType: state.menu.userType,
    authType: state.menu.authType
  };
};

export default connect(mapStateToProps, null)(MainContainer);
