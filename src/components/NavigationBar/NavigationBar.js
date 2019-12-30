import React, { Component } from "react";
import { ReactComponent as Home } from "assets/image/home.svg";
import { ReactComponent as Notice } from "assets/image/notice.svg";
import { ReactComponent as Logout } from "assets/image/logout.svg";
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
import { Redirect } from "react-router-dom";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogout: false
    };

    this.onClickChangeNavigationType = this.onClickChangeNavigationType.bind();
  }

  onClickChangeNavigationType = (e, navigationType) => {
    const { changeNavigationType } = this.props;
    e.stopPropagation();

    changeNavigationType(navigationType);
  };

  onClickLogoutFunc() {
    localStorage.removeItem('gsm-token');
    localStorage.removeItem('authority');
    this.setState({ isLogout : true })
  }

  render() {
    const { navigationType } = this.props;

    if (this.state.isLogout) {
      return <Redirect to="/" />
    }
    
    return (
      <div className="c-navigation-bar">
        <div className="c-navigation-bar__top">
          <span>로고</span>
          {localStorage.getItem("authority") === "teacher" ? (
          <div className="c-profile-bar__header--logout" style={{display: "flex", alignItems: "center", marginLeft: "auto", marginRight: "26px"}} onClick={() => this.onClickLogoutFunc()}>
          <Logout />
          <span style={{fontSize: "18px", color: "#8b8b8b", fontWeight: "normal", marginLeft: "13px"}}>로그아웃</span>
        </div>
        ) : null}
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
          <a target="_blank" rel="noopener noreferrer"  href="http://www.gsm.hs.kr">
            <p className="school">
              <School />
              학교 홈페이지
            </p>
          </a>
          <a target="_blank" rel="noopener noreferrer"  href="http://gsmhs.slack.com">
          <p className="slack">
            <Slack width="25" />
            학교 슬랙
          </p>
          </a>
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
