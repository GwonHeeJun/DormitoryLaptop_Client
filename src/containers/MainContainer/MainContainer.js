import React, { Component } from "react";
import BackImage from "assets/image/backImage.png";
import "./MainContainer.scss";
import Header from "components/Header/Header";
import Choose from "components/Choose/Choose";
import { connect } from "react-redux";
import StudentLogin from "components/Student/Login/StudentLogin";

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
          <React.Fragment>
            <Header />
            <Choose />
          </React.Fragment>
        );
      case "student":
          return (
              <React.Fragment>
                  <Header />
                  <StudentLogin />
              </React.Fragment>
          )
      case "admin":
          return (
              <React.Fragment>
                  Admin
              </React.Fragment>
          )
      default:
        break;
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="main-container__forms">
            {this.makeMainForms()}
        </div>
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
