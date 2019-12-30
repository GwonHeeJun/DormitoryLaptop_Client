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
import { CheckUser, CheckEmailVertication } from "lib/auth";
import { ReactComponent as Success } from "assets/image/success.svg";
import { ReactComponent as Fail } from "assets/image/block.svg";

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRedirect: false,
      desc : "",
      isFailled: false
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
          localStorage.setItem("authority", res.data.authority);
          localStorage.setItem("gsm-token", res.data.token);
          this.setState({
            isRedirect: true
          });
        })
        .catch(err => console.log(err));
    }

    if (this.props.match.params.key) {
      CheckEmailVertication({ keyValue : this.props.match.params.key})
        .then(res => this.setState({ desc: res.data.message }))
        .catch(err => this.setState({ desc: err.response.data.msg, isFailled: true }));
    }
  }

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/home" />;
    }
    console.log(this.props.match);
    return (
      <React.Fragment>
        <div className="main-container">
          <div className="main-container__forms">{this.makeMainForms()}</div>
          <div className="main-container__image-box">
            <img src={BackImage} alt="BackGroundImage" />
          </div>
        </div>
        {this.props.match.params.key ? (
          <React.Fragment>
            <div className="c-dialog" />
            <div className="c-dialog-wrapper">
              <div className="c-dialog-wrapper__box">
                <h3>이메일 인증</h3>
                <p>
                  {this.state.isFailled ? <Fail /> : <Success />}
                  <span style={{ marginLeft: "20px" }}>{this.state.desc}</span>
                </p>
                <div className="c-dialog-wrapper__box--buttons">
                  <button
                    onClick={() => {
                      this.setState({
                        isClicked: false
                      });
                      window.location.href = "/";
                    }}
                  >
                    확인
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
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
