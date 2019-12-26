import React, { Component } from "react";
import { ReactComponent as NoteBook } from "assets/image/notebookPer.svg";
import { ReactComponent as ConsultantImage } from "assets/image/management.svg";
import { ReactComponent as ResidentImage } from "assets/image/resident.svg";
import { connect } from "react-redux";
import { changeAuthType } from "store/Menu/Menu.store";
import { Redirect } from "react-router-dom";
import { localLogin } from "lib/auth";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userTypeKor: "",
      email: "",
      password: "",
      isRedirect: false,
      checkBox: true
    };

    this.onClickChangeAuthType = this.onClickChangeAuthType.bind();
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password, checkBox } = this.state;
    const { title } = this.props;
    if (email === "") {
      alert("이메일을 입력해 주세요.");
      return;
    } else if (password === "") {
      alert("비밀번호를 입력해 주세요.");
      return;
    }

    localLogin({ type: title, email, password })
      .then(result => {
        localStorage.setItem("gsm-token", result.data.token);
        localStorage.setItem('authority', title);
        this.setState({
          isRedirect: true
        });

        if (!checkBox) {
          localStorage.setItem("email", email);
        }
      })
      .catch(result => {
        alert("이메일과 비밀번호가 등록된 정보와 일치하지 않습니다.");
      });
  };

  componentDidMount() {
    const { title } = this.props;
    switch (title) {
      case "student":
        this.setState({
          userTypeKor: "학생"
        });
        break;
      case "manager":
        this.setState({
          userTypeKor: "자치위원"
        });
        break;
      case "teacher":
        this.setState({
          userTypeKor: "사감"
        });
        break;
      default:
        break;
    }

    if(localStorage.getItem("email")) {
      this.setState({
        email: localStorage.getItem("email"),
        checkBox: true
      })
    }
  }

  onClickChangeAuthType = (e, authType) => {
    const { changeAuthType } = this.props;
    e.stopPropagation();

    changeAuthType(authType);
  };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="c-login">
        <div className="c-login__form">
          <h2 className="c-login__form--title">
            {this.state.userTypeKor} 로그인
          </h2>

          <form className="c-login__form--inputs" onSubmit={this.onSubmit}>
            <input
              placeholder="이메일"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <input
              placeholder="비밀번호"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <div className="result">
              <p className="result__save">
                <input
                  className="result__save--email"
                  type="checkbox"
                  name="checkBox"
                  value={this.state.checkBox}
                  onChange={() =>
                    this.setState({ checkBox: !this.state.checkBox })
                  }
                />
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
          {this.state.userTypeKor === "학생" ? (
            <NoteBook />
          ) : this.state.userTypeKor === "자치위원" ? (
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
