import React, { Component, Fragment } from "react";
import { ReactComponent as ManProfile } from "assets/image/manProfile.svg";
import { ReactComponent as UnBlock } from "assets/image/unBlock.svg";
import { ReactComponent as Block } from "assets/image/block.svg";
import "./AdminLaptopList.scss";
import { ReactComponent as Success } from "assets/image/success.svg";
import {
  blockConfirm,
  blockCancel,
  roomDetailUpgrade,
  roomDetail,
  laptopBlock
} from "lib/laptop";

export default class AdminLaptopList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      isManager: false,
      isConfirm: false,
      userId: [],
      roomName: "",
      seatName: "",
      studentName: "",
      title: "",
      desc: "",
      roomDetail: []
    };
  }

  onClickLaptopBlockSubmit(user_id) {
    blockConfirm({ user_id: user_id })
      .then(res => {
        this.setState({
          title: res.data.title,
          desc: res.data.msg,
          isClicked: true
        });
      })
      .catch(err => console.log(err));
  }

  onClickLaptopBlockCancel(user_id) {
    blockCancel({ user_id: user_id })
      .then(res => {
        this.setState({
          title: res.data.title,
          desc: res.data.msg,
          isClicked: true
        });
      })
      .catch(err => console.log(err));
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { type } = this.props;
    if (prevProps.type === type) {
      return;
    } else if (type === "all") {
      roomDetail().then(res => this.setState({ roomDetail: res.data.seats }));
    } else {
      roomDetailUpgrade({ type }).then(res => {
        this.setState({ roomDetail: res.data.seats });
      });
    }
  }

  componentDidMount() {
    const { type } = this.props;
    if (type === "all") {
      roomDetail().then(res => this.setState({ roomDetail: res.data.seats }));
    } else {
      roomDetailUpgrade({ type }).then(res => {
        this.setState({ roomDetail: res.data.seats });
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="c-admin-laptop-list">
          <div className="c-admin-laptop-list__type">
            <span className="name">이름</span>
            <span className="grade">학년</span>
            <span className="class">반</span>
            <span className="number">번호</span>
            <span className="room">학습실</span>
            <span className="seat">좌석</span>
            <span className="status">상태</span>
            <span className="time">대여시간</span>
            <span className="block" />
          </div>
          <div className="c-admin-laptop-list__content">
            <div className="c-admin-laptop-list__content--wrapper">
              {localStorage.getItem("authority") === "teacher"
                ? this.state.roomDetail.map((item, idx) => {
                    return (
                      <div className="c-admin-laptop-list__content--wrapper__user">
                        <span className="name">
                          <ManProfile />
                          {item.name}
                        </span>
                        <span className="grade">{item.grade}</span>
                        <span className="class">{item.class}</span>
                        <span className="number">{item.number}</span>
                        <span className="room">{item.room}</span>
                        <span className="seat">{item.seat}</span>
                        <span className="status">
                          {item.is_blocked === 1 ? (
                            <div className="status__caught">
                              <span>적발됨</span>
                            </div>
                          ) : item.is_blocked === 2 ? (
                            <div className="status__caught">
                              <span>이용불가</span>
                            </div>
                          ) : (
                            <div className="status__use">
                              <span>이용가능</span>
                            </div>
                          )}
                        </span>
                        <span className="time">{item.rental_time}</span>
                        <span className="block">
                          {item.is_blocked === 2 ? (
                            <div className="sponse">
                              <span>승인됨</span>
                            </div>
                          ) : item.is_blocked === 1 ? (
                            <div className="quest">
                              <span
                                className="ok"
                                onClick={() =>
                                  this.onClickLaptopBlockSubmit(item.user_id)
                                }
                              >
                                승인
                              </span>
                              <span
                                className="nope"
                                onClick={() =>
                                  this.onClickLaptopBlockCancel(item.user_id)
                                }
                              >
                                취소
                              </span>
                            </div>
                          ) : null}
                        </span>
                      </div>
                    );
                  })
                : this.state.roomDetail.map((item, idx) => {
                    return (
                      <div className="c-admin-laptop-list__content--wrapper__user">
                        <span className="name">
                          <ManProfile />
                          {item.name}
                        </span>
                        <span className="grade">{item.grade}</span>
                        <span className="class">{item.class}</span>
                        <span className="number">{item.number}</span>
                        <span className="room">{item.room}</span>
                        <span className="seat">{item.seat}</span>
                        <span className="status">
                          <div className="status__use">
                            <span>이용가능</span>
                          </div>
                        </span>
                        <span className="time">{item.rental_time}</span>
                        {item.is_blocked ?  <span
                          className="block"
                        >
                          <Block />
                        </span> : <span
                          className="block"
                          onClick={() =>
                            {this.setState({
                              isClicked: true,
                              isManager: true,
                              roomName: item.room,
                              seatName: item.seat,
                              studentName: item.name,
                            });
                            this.state.userId.push(item.user_id);
                          }
                          }
                        >
                          <UnBlock />
                        </span> }
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
        {this.state.isClicked ? (
          <React.Fragment>
            <div className="c-dialog" />
            <div className="c-dialog-wrapper">
              <div className="c-dialog-wrapper__box">
                <h3>노트북 부정 사용 적발 승인</h3>
                {this.state.isManager ? (
                  <p>
                    {this.state.roomName}, {this.state.seatName}번 좌석에서
                    이용중인 {this.state.studentName}학생의 부정 사용을 적발
                    했나요?
                  </p>
                ) : (
                  <p>
                    <Success />
                    <span style={{ marginLeft: "20px" }}>
                      {this.state.desc}
                    </span>
                  </p>
                )}
                <div className="c-dialog-wrapper__box--buttons">
                  {this.state.isManager ? (
                    <Fragment>
                      <button
                        onClick={() =>
                          {
                            this.setState({
                              isManager: false,
                              desc:
                                "사감선생님 검토 후 해당 학생의 노트북 대여가 한달 간 금지됩니다."
                            });
                            laptopBlock({
                              user_id: this.state.userId,
                              duration: 30
                            }).then(res => console.log(res)).catch(err => console.log(err));
                          }
                        }
                      >
                        확인
                      </button>
                      <button
                        onClick={() =>
                          this.setState({ isClicked: false, isManager: false })
                        }
                      >
                        취소
                      </button>
                    </Fragment>
                  ) : (
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
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}
