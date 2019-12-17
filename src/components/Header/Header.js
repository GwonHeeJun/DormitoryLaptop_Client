import React, { Component } from "react";
import { connect } from "react-redux";
import { changeUserType, changeAuthType } from "store/Menu/Menu.store";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onClickChangeUserAuthType = this.onClickChangeUserAuthType.bind();
  }

  onClickChangeUserAuthType = (e, userType) => {
    const { changeUserType, changeAuthType, authType } = this.props;
    e.stopPropagation();

    if (
      this.props.userType === "consultant" ||
      this.props.userType === "resident"
    ) {
      changeUserType("management");
      return 0;
    } else if (authType === "register") {
      changeAuthType("login");
    }

    changeUserType(userType);
  };

  render() {
    const { userType } = this.props;
    return (
      <div className="c-header">
        {userType !== "" ? (
          <span
            className="c-header__logo"
            onClick={e => this.onClickChangeUserAuthType(e, "")}
          >
            돌아가기
          </span>
        ) : (
          <span className="c-header__logo">로고</span>
        )}
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

const mapDispatchToProps = dispatch => {
  return {
    changeAuthType: authType => dispatch(changeAuthType(authType)),
    changeUserType: userType => dispatch(changeUserType(userType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
