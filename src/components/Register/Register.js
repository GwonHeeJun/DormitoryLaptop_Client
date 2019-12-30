import React, { Component } from "react";
import { ReactComponent as NoteBook } from "assets/image/notebookPer.svg";
import { ReactComponent as ConsultantImage } from "assets/image/management.svg";
import { ReactComponent as ResidentImage } from "assets/image/resident.svg";
import { localRegister } from "lib/auth";
import { ReactComponent as Success } from "assets/image/success.svg";
import { ReactComponent as Fail } from "assets/image/block.svg";
import "./Register.scss";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userTypeKor: "",
      email: "",
      password: "",
      rePassword: "",
      verification_code: "",
      checkBox: true,
      desc: "",
      isFailled: false
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password, verification_code, rePassword, checkBox } = this.state;
    const { title } = this.props;
    if (email === "") {
      alert("이메일을 입력해 주세요.");
      return;
    } else if (password === "") {
      alert("비밀번호를 입력해 주세요.");
      return;
    } else if (password !== rePassword) {
      alert("비밀번호가 일치하지 않습니다.");
      this.setState({
        rePassword: ""
      });
      return;
    } else if (checkBox) {
      alert("이용약관과 개인정보취급방침에 동의해주세요");
      return;
    }

    localRegister({ type: title, email, password, verification_code })
      .then(result => {
        this.setState({
          desc: result.data.msg,
          isClicked: true,
        })
      })
      .catch(result => {
        this.setState({
          desc: result.response.data.msg,
          isClicked: true,
          isFailled: true
        })
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

  render() {
    return (
      <React.Fragment>
      <div className="c-register">
        <div className="c-register__content">
          <h2 className="c-register__content--title">
            {this.state.userTypeKor} 계정 생성
          </h2>
          <form className="c-register__content--form" onSubmit={this.onSubmit}>
            <input
              className="c-register__content--form__input"
              placeholder="이메일"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <input
              className="c-register__content--form__input"
              placeholder="비밀번호"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <input
              className="c-register__content--form__input"
              placeholder="비밀번호 확인"
              name="rePassword"
              value={this.state.rePassword}
              onChange={this.onChange}
            />
            <input
              className="c-register__content--form__input"
              placeholder={this.state.userTypeKor + " 확인 코드"}
              name="verification_code"
              value={this.state.verification_code}
              onChange={this.onChange}
            />
            <div className="c-register__content--form__desc">
              <input
                className="agree-check"
                type="checkbox"
                name="checkBox"
                value={this.state.checkBox}
                onChange={() => this.setState({ checkBox : !this.state.checkBox})}
              />
              <p>
                <span>이용약관, 개인정보취급방침</span>에 동의합니다.
              </p>
            </div>
            <button className="c-register__content--form__btn">
              계정 생성
            </button>
          </form>
        </div>
        <div className="c-register__footer">
          {this.state.userTypeKor === "학생" ? (
            <NoteBook />
          ) : this.state.userTypeKor === "자치위원" ? (
            <ConsultantImage />
          ) : (
            <ResidentImage />
          )}
        </div>
      </div>
      {this.state.isClicked ? (
        <React.Fragment>
          <div className="c-dialog" />
          <div className="c-dialog-wrapper">
            <div className="c-dialog-wrapper__box">
              <h3>회원가입</h3>
              <p>
                {this.state.isFailled ? <Fail /> : <Success /> }
                <span style={{ marginLeft: "20px" }}>{this.state.desc}</span>
              </p>
              <div className="c-dialog-wrapper__box--buttons">
                <button
                  onClick={() => {
                    this.setState({
                      isClicked: false
                    });
                    window.location.reload();
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
