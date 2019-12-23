import React, { Component } from "react";
import { ReactComponent as Notebook } from "assets/image/notebookSele.svg";
import Lap from "./RoomType/Lap/Lap";
import "./LaptopDesc.scss";

export default class LaptopDesc extends Component {
  render() {
    return (
      <div className="c-laptop-desc">
        <div className="c-laptop-desc__left">
          <div className="c-laptop-desc__left--header">
            <h2 className="c-laptop-desc__left--header__title">좌석 선택</h2>
            <span className="c-laptop-desc__left--header__desc">
              RoomName실
            </span>
          </div>
          <div className="c-laptop-desc__left--content">
              <Lap />
          </div>
        </div>
        <div className="c-laptop-desc__right">
          <div className="c-laptop-desc__right">
            <div className="c-laptop-desc__right--nope">
              <div className="c-laptop-desc__right--nope__box" />
              <span>이용불가</span>
            </div>
            <div className="c-laptop-desc__right--use">
              <div className="c-laptop-desc__right--use__box" />
              <span>이용가능</span>
            </div>
            <div className="c-laptop-desc__right--sele">
              <div className="c-laptop-desc__right--sele__box">
                <Notebook />
              </div>
              <span>선택됨</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
