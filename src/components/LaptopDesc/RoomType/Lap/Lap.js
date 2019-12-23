import React, { Component } from "react";
import { ReactComponent as NoteBook } from "assets/image/BnotebookSele.svg";
import "./Lap.scss";

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

export default class Lap extends Component {
  render() {
    return (
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
                    console.log(item);
                    if (idx <= 1) {
                      return (
                        <div
                          className={
                            "c-lap__content--right__table-left" +
                            `${item.seated === 0 ? "-not" : ""}`
                          }
                        >
                          {item.seated === 2 ? <NoteBook /> : ix * 6 + idx + 1}
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
                        >
                          {item.seated === 2 ? <NoteBook /> : ix * 6 + idx + 1}
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
    );
  }
}
