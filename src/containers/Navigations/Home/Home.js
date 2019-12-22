import React, { Component } from "react";
import ServiceBanner from "components/ServiceBanner/ServiceBanner";
import Notice from "components/Notice/Notice";
import MorningSong from "components/MorningSong/MorningSong";
import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="home-title">
          홈 <small>2019년 12월 16일 월요일</small>
        </h2>
        <div className="home-service">
          <ServiceBanner />
        </div>
        <div className="home-notice">
          <div className="consultant">
            <Notice title="자치 위원회" />
          </div>
          <div className="resident">
            <Notice title="사감 선생님" />
          </div>
        </div>
        <div className="home-song">
          <MorningSong />
        </div>
      </React.Fragment>
    );
  }
}
