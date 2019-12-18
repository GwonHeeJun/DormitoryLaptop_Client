import React, { Component } from "react";
import { ReactComponent as Home } from "assets/image/home.svg";
import { ReactComponent as Notice } from "assets/image/notice.svg";
import { ReactComponent as NoteBook } from "assets/image/notebook.svg";
import { ReactComponent as Song } from "assets/image/song.svg";
import { ReactComponent as Graph } from "assets/image/graph.svg";
import { ReactComponent as Setting } from "assets/image/setting.svg";
import { ReactComponent as School } from "assets/image/school.svg";
import { ReactComponent as Slack } from "assets/image/Slack.svg";
import { ReactComponent as Bug } from "assets/image/bug.svg";
import "./NavigationBar.scss";

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="c-navigation-bar">
        <div className="c-navigation-bar__top">
          <span>로고</span>
        </div>
        <div className="c-navigation-bar__mid">
          <p className="home__active">
            <Home />홈
          </p>
          <p className="notice">
            <Notice />
            공지사항
          </p>
          <p className="notebook">
            <NoteBook />
            노트북 대여
          </p>
          <p className="song">
            <Song />
            기상음악
          </p>
          <p className="graph">
            <Graph />
            상벌점
          </p>
          <p className="setting"> 
            <Setting />
            설정
          </p>
        </div>
        <div className="c-navigation-bar__bottom">
            <p className="school">
                <School/>학교 홈페이지
            </p>
            <p className="slack">
                <Slack width="25"/>학교 슬랙
            </p>
            <p className="bug">
                <Bug />버그 제보
            </p>
        </div>
      </div>
    );
  }
}
