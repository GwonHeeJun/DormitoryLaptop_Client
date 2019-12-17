import React, { Component } from "react";
import { ReactComponent as NoteBook } from "assets/image/notebookPer.svg";
import { ReactComponent as ConsultantImage } from "assets/image/management.svg";
import { ReactComponent as ResidentImage } from "assets/image/resident.svg";
import ReturnMenu from "assets/image/naviBack.png";
import { connect } from "react-redux";

import { changeUserType } from "store/Menu/Menu.store";
import "./Login.scss";

class Login extends Component {
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
    return (
      <div className="c-stu-login">
        <div className="c-stu-login__form">
          <h2 className="c-stu-login__form--title">{this.props.title} 로그인</h2>
          <form className="c-stu-login__form--inputs">
            <input placeholder="이메일" />
            <input placeholder="비밀번호" />
            <div className="result">
              <p className="result__save">
                <input className="result__save--email" type="checkbox" />
                <span>이메일 저장</span>
              </p>
              <button className="result__login">로그인</button>
            </div>
          </form>
        </div>
        <div className="c-stu-login__desc">
          <p className="c-stu-login__desc--explain">
            이메일 혹은 비밀번호를 잊으셨나요?
            <span className="c-stu-login__desc--explain__href">
              이메일/비밀번호 찾기
            </span>
          </p>
          <p className="c-stu-login__desc--explain">
            아직 계정이 없나요?
            <span className="c-stu-login__desc--explain__href">
              계정 생성하기
            </span>
          </p>
          <div className="c-stu-login__desc--navi">
            <img
              className="c-stu-login__desc--navi__back"
              src={ReturnMenu}
              alt="ReturnMenu"
              onClick={(e) => this.onClickChangeUserAuthType(e, "")}
            />
          </div>
        </div>
        <div className="c-stu-login__footer">
          {this.props.title === "학생" ? <NoteBook /> : this.props.title === "자치위원" ? <ConsultantImage /> : <ResidentImage />}
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

export default connect(null, mapDispatchToProps)(Login);
