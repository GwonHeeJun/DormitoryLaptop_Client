import React, { Component } from "react";
import { ReactComponent as NoteBook } from "assets/image/notebookPer.svg";
import { ReactComponent as ConsultantImage } from "assets/image/management.svg";
import { ReactComponent as ResidentImage } from "assets/image/resident.svg";
import "./Register.scss";

export default class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userTypeKor: ""
    }
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

  render() {
    return (
      <div className="c-register">
        <div className="c-register__content">
          <h2 className="c-register__content--title">{this.state.userTypeKor} 계정 생성</h2>
          <form className="c-register__content--form">
            <input
              className="c-register__content--form__input"
              placeholder="이메일"
            />
            <input
              className="c-register__content--form__input"
              placeholder="비밀번호"
            />
            <input
              className="c-register__content--form__input"
              placeholder="비밀번호 확인"
            />
            <input
              className="c-register__content--form__input"
              placeholder={this.state.userTypeKor + " 확인 코드"}
            />
            <div className="c-register__content--form__desc">
              <input className="agree-check" type="checkbox" />
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
    );
  }
}
