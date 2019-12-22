import React, { Component } from "react";
import { ReactComponent as Home } from "assets/image/home.svg";
import { ReactComponent as Notice } from "assets/image/notice.svg";
import { ReactComponent as Notebook } from "assets/image/notebook.svg";
import { ReactComponent as Song } from "assets/image/song.svg";
import { ReactComponent as Graph } from "assets/image/graph.svg";
import { ReactComponent as Setting } from "assets/image/setting.svg";
import { ReactComponent as School } from "assets/image/school.svg";
import { ReactComponent as Slack } from "assets/image/Slack.svg";
import { ReactComponent as Bug } from "assets/image/bug.svg";
import { connect } from "react-redux";
import { changeNavigationType } from "store/Menu/Menu.store";
import "./NavigationBar.scss";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onClickChangeNavigationType = this.onClickChangeNavigationType.bind();
  }

  onClickChangeNavigationType = (e, navigationType) => {
    const { changeNavigationType } = this.props;
    e.stopPropagation();

    changeNavigationType(navigationType);
  };

  render() {
    const { navigationType } = this.props;
    return (
      <div className="c-navigation-bar">
        <div className="c-navigation-bar__top">
          <span>로고</span>
        </div>
        <div className="c-navigation-bar__mid">
          <p
            className={navigationType === "home" ? "home__active" : "home"}
            onClick={e => this.onClickChangeNavigationType(e, "home")}
          >
            <Home />홈
          </p>
          <p
            className={
              navigationType === "notice" ? "notice__active" : "notice"
            }
            onClick={e => this.onClickChangeNavigationType(e, "notice")}
          >
            <Notice />
            공지사항
          </p>
          <p
            className={
              navigationType === "laptop" ? "laptop__active" : "laptop"
            }
            onClick={e => this.onClickChangeNavigationType(e, "laptop")}
          >
            <Notebook />
            노트북 대여
          </p>
          <p
            className={navigationType === "song" ? "song__active" : "song"}
            onClick={e => this.onClickChangeNavigationType(e, "song")}
          >
            <Song />
            기상음악
          </p>
          <p
            className={navigationType === "point" ? "graph__active" : "graph"}
            onClick={e => this.onClickChangeNavigationType(e, "point")}
          >
            <Graph />
            상벌점
          </p>
          <p
            className={
              navigationType === "setting" ? "setting__active" : "setting"
            }
            onClick={e => this.onClickChangeNavigationType(e, "setting")}
          >
            <Setting />
            설정
          </p>
        </div>
        <div className="c-navigation-bar__bottom">
          <p className="school">
            <School />
            학교 홈페이지
          </p>
          <p className="slack">
            <Slack width="25" />
            학교 슬랙
          </p>
          <p className={
              navigationType === "report" ? "bug__active" : "bug"
            }
            onClick={e => this.onClickChangeNavigationType(e, "report")}
          >
            <Bug />
            버그 제보
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navigationType: state.menu.navigationType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeNavigationType: navigationType =>
      dispatch(changeNavigationType(navigationType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
