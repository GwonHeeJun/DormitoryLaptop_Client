import React, { Component } from "react";
import { ReactComponent as NoteBook } from "assets/image/BnotebookSele.svg";
import "./Lap.scss";
import { connect } from "react-redux";

const dummyData = [
  [
    { seated: 0 },
    { seated: 1 },
    { seated: 0 },
    { seated: 2 },
    { seated: 2 },
    { seated: 1 }
  ],
  [
    { seated: 0 },
    { seated: 0 },
    { seated: 1 },
    { seated: 2 },
    { seated: 1 },
    { seated: 0 }
  ],
  [
    { seated: 0 },
    { seated: 1 },
    { seated: 0 },
    { seated: 2 },
    { seated: 2 },
    { seated: 1 }
  ],
  [
    { seated: 0 },
    { seated: 0 },
    { seated: 1 },
    { seated: 2 },
    { seated: 1 },
    { seated: 0 }
  ]
];

class Lap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      seatNum: 0,
      roomName: ""
    };
  }

  componentDidMount() {
    const { roomName } = this.props;
    this.forceUpdate();
    switch (roomName) {
      case "lab1":
        this.setState({
          roomName: "Lab 1"
        });
        break;
      case "lab2":
        this.setState({
          roomName: "Lab 2"
        });
        break;
      case "lab3":
        this.setState({
          roomName: "Lab 3"
        });
        break;
      case "lab4":
        this.setState({
          roomName: "Lab 4"
        });
        break;
      default:
        break;
    }
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
              {dummyData.map((list, ix) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      height: "60px",
                      marginBottom: "20px"
                    }}
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
                          <React.Fragment>
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
                <h3>노트북 대여 신청</h3>
                <p>
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
                </p>
                <div className="c-dialog-wrapper__box--buttons">
                  <button>신청</button>
                  <button
                    onClick={() =>
                      this.setState({
                        isClicked: false
                      })
                    }
                  >
                    취소
                  </button>
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
