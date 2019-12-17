import React, { Component } from "react";
import { ReactComponent as Managementor } from "assets/image/management.svg";
import { ReactComponent as Student } from "assets/image/student.svg";
import { ReactComponent as Resident } from "assets/image/king.svg";
import { connect } from "react-redux";
import { changeUserType } from "store/Menu/Menu.store";
import ReturnMenu from "assets/image/naviBack.png";
import "./ManagementChoose.scss";

class ManagementChoose extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onClickChangeUserAuthType = this.onClickChangeUserAuthType.bind();
  }

  onClickChangeUserAuthType = (e, userType) => {
    const { changeUserType } = this.props;
    e.stopPropagation();

    changeUserType(userType);
  };

  render() {
    return (
      <div className="c-choose">
        <div className="c-choose__header">
          <div className="c-choose__header--title">
            <p>기숙사 자치위원회를</p>
            <p>줄이면 기자위라고</p>
            <p>하더라 크크크</p>
          </div>
          <div className="c-choose__header--desc">
            <span>
              김대기 선생님의 별명이 '타케시'인 이유는 수업시간에 자주
              '타켓이'라는 말씀을 하시기 때문이다. 그리고 솔직히 일본인을
              닮았다.
            </span>
          </div>
        </div>
        <div className="c-choose__content">
          <span className="c-choose__content--title">당신은 누구신가요?</span>
          <div
            className="c-choose__content--wrapper"
            onClick={e => this.onClickChangeUserAuthType(e, "consultant")}
          >
            <div className="c-choose__content--wrapper__stu-btn">
              <Student />
              <span className="desc">기자위으로 접속</span>
            </div>
            <div
              className="c-choose__content--wrapper__adm-btn"
              onClick={e => this.onClickChangeUserAuthType(e, "resident")}
            >
              <Resident />
              <span className="desc">사감으로 접속</span>
            </div>
          </div>
          <div className="c-choose__content--bottom">
            <img src={ReturnMenu}  onClick={e => this.onClickChangeUserAuthType(e, "")} alt="ReturnMenu"/>
          </div>
        </div>
        <div className="c-choose__footer">
          <Managementor />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserType: userType => dispatch(changeUserType(userType))
  };
};

export default connect(null, mapDispatchToProps)(ManagementChoose);
