import React, { Component } from "react";
import { connect } from "react-redux";
import { changeUserType } from "store/Menu/Menu.store";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onClickChangeUserAuthType = this.onClickChangeUserAuthType.bind();
  }

  onClickChangeUserAuthType = (e, userType) => {
    const { changeUserType, title } = this.props;
    e.stopPropagation();

    if (title === "자치위원" || title === "사감") {
      changeUserType("management");
      return 0;
    }

    changeUserType(userType);
  };

  render() {
    const { userType } = this.props;
    return (
      <div className="c-header">
        {userType !== "" ? <span
          className="c-header__logo"
          onClick={e => this.onClickChangeUserAuthType(e, "")}
        >
          돌아가기
        </span> : <span className="c-header__logo">로고</span>}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      userType: state.menu.userType
    };
  };

const mapDispatchToProps = dispatch => {
  return {
    changeUserType: userType => dispatch(changeUserType(userType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
