import React, { Component } from "react";
import { ReactComponent as Ring } from "assets/image/ring.svg";
import { ReactComponent as Logout } from "assets/image/logout.svg";
import { ReactComponent as Limit } from "assets/image/limit.svg";
import { ReactComponent as ManProfile } from "assets/image/manProfile.svg";
import "./ProfileBar.scss";

export default class ProfileBar extends Component {
  render() {
    return (
      <div className="c-profile-bar">
        <div className="c-profile-bar__header">
          <div className="c-profile-bar__header--notice">
            <Ring />
            <span className="new" />
          </div>
          <div className="c-profile-bar__header--logout">
            <Logout />
            <span>로그아웃</span>
          </div>
        </div>
        <div className="c-profile-bar__content">
          <div className="c-profile-bar__content--user">
            <ManProfile />
            <span className="name">리액트</span>
            <span className="class">0-0</span>
          </div>
          <div className="c-profile-bar__content--grade">
            <Limit />
            <span className="title">상벌점</span>
            <div className="bar">
              <span className="bar__location" style={{ width: "35.5px" }} />
            </div>
            <span className="grade">-5</span>
          </div>
        </div>
        <div className="c-profile-bar__footer">
          <span className="c-profile-bar__footer--title">이벤트</span>

          <div className="card-list">
            <div className="card-list__card-notebook">
              <div className="left">
                <span className="left__top">12/16 노트북 대여</span>
                <span className="left__bottom">LAB 4실, 15번 좌석</span>
              </div>
              <div className="right">
                <span className="right__time">22:00 - 23:50</span>
              </div>
            </div>

            <div
              className="card-list__card-youtube"
              style={{
                backgroundImage:
                  "url('https://img.youtube.com/vi/D1PvIWdJ8xo/0.jpg')"
              }}
            >
              <div className="left">
                <span className="left__top">12/17 기상음악 신청</span>
                <span className="left__bottom">IU(아이유) - Blueming</span>
              </div>
              <div className="right">
                <span className="right__time">7:15 - 7:19</span>
              </div>
            </div>
          </div>
        </div>
        <div className="c-profile-bar__copyright">
          <p>© 2019 GSM. All Rights Reserved.</p>
          <p>
            <span>개인정보취급방침</span> | <span>이용약관</span> |{" "}
            <span>라이선스</span> | <span>Github</span>
          </p>
        </div>
      </div>
    );
  }
}
