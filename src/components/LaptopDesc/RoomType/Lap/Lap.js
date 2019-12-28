import React, { Component, Fragment } from "react";
import { ReactComponent as NoteBook } from "assets/image/BnotebookSele.svg";
import "./Lap.scss";
import { connect } from "react-redux";
import { roomSeat, laptopBorrow } from "lib/laptop";
import { ReactComponent as Success } from "assets/image/success.svg";
import { ReactComponent as Fail } from "assets/image/block.svg";

class Lap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      seatNum: 0,
      roomName: "",
      roomSeatDesc: [],
      count: 0,
      title: "",
      desc: "",
      borrowType: ""
    };
  }

  componentDidMount() {
    const { roomName } = this.props;
    roomSeat({ roomName }).then(res =>
      this.setState({ roomSeatDesc: res.data.seats })
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { roomName } = this.props;
    if (prevProps.roomName === roomName) {
      return;
    } else {
      roomSeat({ roomName }).then(res => {
        this.setState({ roomSeatDesc: res.data.seats });
      });
    }
  }

  onSubmitBorrowLaptop(seat) {
    const { roomName } = this.props;
    laptopBorrow({ room: roomName, seat: seat })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            title: res.data.title,
            desc: res.data.msg,
            borrowType: "success"
          });
        } else {
          this.setState({
            title: res.data.title,
            desc: res.data.msg,
            borrowType: "fail"
          });
        }
      })
      .catch(err => {
        if (err.response.status === 422) {
          this.setState({
            title: err.response.data.title,
            desc: err.response.data.msg,
            borrowType: "fail"
          });
        }
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="c-lap">
          <div className="c-lap__header">
            <span className="c-lap__header--board">칠판</span>
          </div>
          <div className="c-lap__content">
            <div className="c-lap__content--left">
              <span className="c-lap__content--left__front">앞문</span>
              <span className="c-lap__content--left__back">뒷문</span>
            </div>
            <div className="c-lap__content--right">
              {this.state.roomSeatDesc.map((list, ix) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      height: "60px",
                      marginBottom: "20px"
                    }}
                    key={ix}
                  >
                    {list.map((item, idx) => {
                      if (idx <= 1) {
                        return (
                          <div
                            className={
                              "c-lap__content--right__table-left" +
                              `${item.seated === 0 ? "-not" : ""}`
                            }
                            onClick={() =>
                              this.setState({
                                isClicked: true,
                                seatNum: ix * 6 + idx + 1
                              })
                            }
                            key={idx}
                          >
                            {item.seated === 2 ? (
                              <NoteBook />
                            ) : (
                              ix * 6 + idx + 1
                            )}
                          </div>
                        );
                      } else if (idx === 2) {
                        return (
                          <React.Fragment key={idx}>
                            <div style={{ marginRight: "85px" }} />
                            <div
                              className={
                                "c-lap__content--right__table-left" +
                                `${item.seated === 0 ? "-not" : ""}`
                              }
                              onClick={() =>
                                this.setState({
                                  isClicked: true,
                                  seatNum: ix * 6 + idx + 1
                                })
                              }
                            >
                              {item.seated === 2 ? (
                                <NoteBook />
                              ) : (
                                ix * 6 + idx + 1
                              )}
                            </div>
                          </React.Fragment>
                        );
                      } else {
                        return (
                          <div
                            className={
                              "c-lap__content--right__table-left" +
                              `${item.seated === 0 ? "-not" : ""}`
                            }
                            onClick={() =>
                              this.setState({
                                isClicked: true,
                                seatNum: ix * 6 + idx + 1
                              })
                            }
                            key={idx}
                          >
                            {item.seated === 2 ? (
                              <NoteBook />
                            ) : (
                              ix * 6 + idx + 1
                            )}
                          </div>
                        );
                      }
                    })}
                    <br />
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
                <h3>
                  {this.state.title.length === 0
                    ? "노트북 대여 신청"
                    : this.state.title}
                </h3>
                <p>
                  {this.state.borrowType.length === 0 ? (
                    <Fragment>
                      <span>
                        {this.props.roomName === "lab1"
                          ? "Lab 1"
                          : this.props.roomName === "lab2"
                          ? "Lab 2"
                          : this.props.roomName === "lab3"
                          ? "Lab 3"
                          : "Lab 4"}
                        실, {this.state.seatNum}번
                      </span>{" "}
                      좌석에 노트북 대여를 신청할까요?
                    </Fragment>
                  ) : this.state.borrowType === "fail" ? (
                    <Fragment>
                      <Fail />
                      <span style={{ marginLeft: "20px" }}>
                        {this.state.desc}
                      </span>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <Success />
                      <span style={{ marginLeft: "20px" }}>
                        {this.state.desc}
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="c-dialog-wrapper__box--buttons">
                  {this.state.borrowType === "success" ? (
                    <button
                    onClick={() => {
                      this.setState({ isClicked: false, borrowType: "" });
                      window.location.reload();
                    }}
                    >
                      확인
                    </button>
                  ) : this.state.borrowType === "fail" ? (
                    <button
                    onClick={() => {
                      this.setState({ isClicked: false, borrowType: "" });
                    }}
                    >
                      확인
                    </button>
                  ) : (
                    <Fragment>
                      <button
                        onClick={() =>
                          this.onSubmitBorrowLaptop(this.state.seatNum)
                        }
                      >
                        신청
                      </button>
                      <button
                        onClick={() =>
                          this.setState({
                            isClicked: false
                          })
                        }
                      >
                        취소
                      </button>
                    </Fragment>
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

const mapStateToProps = state => {
  return {
    roomName: state.laptop.roomName
  };
};

export default connect(mapStateToProps, null)(Lap);
