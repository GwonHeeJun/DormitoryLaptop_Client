import React, { Component } from "react";
import { ReactComponent as NoteBook } from "assets/image/notebookPer.svg";
import { ReactComponent as ConsultantImage } from "assets/image/management.svg";
import { ReactComponent as ResidentImage } from "assets/image/resident.svg";
import { connect } from "react-redux";
import { changeAuthType } from "store/Menu/Menu.store";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userTypeKor: ""
    };

    this.onClickChangeAuthType = this.onClickChangeAuthType.bind();
  }

  componentDidMount() {
    const { title } = this.props;
    switch (title) {
      case "student":
        this.setState({
          userTypeKor: "학생"
        });
        break;
      case "consultant":
        this.setState({
          userTypeKor: "자치위원"
        });
        break;
      case "resident":
        this.setState({
          userTypeKor: "사감"
        });
        break;
      default:
        break;
    }
  }

  onClickChangeAuthType = (e, authType) => {
    const { changeAuthType } = this.props;
    e.stopPropagation();

    changeAuthType(authType);
  };

  render() {
    return (
      <div className="c-login">
        <div className="c-login__form">
          <h2 className="c-login__form--title">
            {this.state.userTypeKor} 로그인
          </h2>

          <form className="c-login__form--inputs">
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
        <div className="c-login__desc">
          <p className="c-login__desc--explain">
            이메일 혹은 비밀번호를 잊으셨나요?
            <span className="c-login__desc--explain__href">
              이메일/비밀번호 찾기
            </span>
          </p>
          <p className="c-login__desc--explain">
            아직 계정이 없나요?
            <span
              className="c-login__desc--explain__href"
              onClick={e => this.onClickChangeAuthType(e, "register")}
            >
              계정 생성하기
            </span>
          </p>
        </div>
        <div className="c-login__footer">
          {this.props.title === "학생" ? (
            <NoteBook />
          ) : this.props.title === "자치위원" ? (
            <ConsultantImage />
          ) : (
            <ResidentImage />
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeAuthType: authType => dispatch(changeAuthType(authType))
  };
};

export default connect(null, mapDispatchToProps)(Login);
