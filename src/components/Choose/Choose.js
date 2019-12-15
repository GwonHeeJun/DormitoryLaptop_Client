import React, { Component } from "react";
import { ReactComponent as NoteBook } from "assets/image/notebookPer.svg";
import { ReactComponent as Student } from 'assets/image/student.svg';
import { ReactComponent as Admin } from 'assets/image/admin.svg';
import "./Choose.scss";

export default class Choose extends Component {
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
          <span className="c-choose__content--title">시작해 볼까요?</span>
          <div className="c-choose__content--wrapper">
            <div className="c-choose__content--wrapper__stu-btn">
                <Student />
                <span className="desc">학생으로 접속</span>
            </div>
            <div className="c-choose__content--wrapper__adm-btn">
                <Admin />
                <span className="desc">관리자로 접속</span>
            </div>
          </div>
        </div>
        <div className="c-choose__footer">
          <NoteBook />
        </div>
      </div>
    );
  }
}