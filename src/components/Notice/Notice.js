import React, { Component } from "react";
import { ReactComponent as Back } from 'assets/image/back.svg';
import "./Notice.scss";

const ConsultantDummy = [
  {
    new: true,
    title: "12월 19일 자치위원회 임시회 일정 안내",
    date: "2019년 12월 19일"
  },
  {
    new: false,
    title: "자치위원 공석으로 인한 새 위원 임명 안내",
    date: "2019년 12월 13일"
  },
  {
    new: false,
    title: "호실 아침 점검 사항 안내",
    date: "2019년 11월 20일"
  },
  {
    new: false,
    title: "1호실 아침 점검 사항 안내",
    date: "2019년 11월 20일"
  }
];

const ResidentDummy = [
    {
        new: true,
        title: "남학생 라면 청소 대상자 공고",
        date: "2019년 12월 19일"
    },
    {
        new: true,
        title: "2층 학습실 이용 시 주의사항",
        date: "2019년 12월 13일"
    },
    {
        new: false,
        title: "4층 화장실 앞에서 양말 습득",
        date: "2019년 11월 20일"
    },
    {
        new: false,
        title: "3층 탈의실에서 샴푸 잃어버린 사람 찾음",
        date: "2019년 11월 20일"
    }
];

export default class Notice extends Component {
  render() {
    return (
      <div className="c-cs-notice">
        <div className="c-cs-notice__header">
          <h2>{this.props.title} 공지사항</h2>
          <span>더 보기</span>
          <Back />
        </div>
        <div className="c-cs-notice__list">
          {this.props.title === "자치 위원회"
            ? ConsultantDummy.map((item, idx) => {
                if (item.new === true) {
                  return (
                    <div className="c-cs-notice__list--single-new" key={idx}>
                      <div className="cricle">
                        <span className="cons" />
                      </div>
                      <div className="title">
                        <span>{item.title}</span>
                      </div>
                      <div className="date">
                        <span>{item.date}</span>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="c-cs-notice__list--single-old" key={idx}>
                      <div className="cricle">
                        <span className="cons" />
                      </div>
                      <div className="title">
                        <span>{item.title}</span>
                      </div>
                      <div className="date">
                        <span>{item.date}</span>
                      </div>
                    </div>
                  );
                }
              })
            : ResidentDummy.map((item, idx) => {
                if (item.new === true) {
                  return (
                    <div className="c-cs-notice__list--single-new" key={idx}>
                      <div className="cricle">
                        <span className="resi" />
                      </div>
                      <div className="title">
                        <span>{item.title}</span>
                      </div>
                      <div className="date">
                        <span>{item.date}</span>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="c-cs-notice__list--single-old" key={idx}>
                      <div className="cricle">
                        <span className="resi" />
                      </div>
                      <div className="title">
                        <span>{item.title}</span>
                      </div>
                      <div className="date">
                        <span>{item.date}</span>
                      </div>
                    </div>
                  );
                }
              })}
        </div>
      </div>
    );
  }
}
