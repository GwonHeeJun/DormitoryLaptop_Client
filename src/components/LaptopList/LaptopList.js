import React, { Component } from "react";
import "./LaptopList.scss";
import SmallRoom from "components/SmallRoom/SmallRoom";
import { connect } from 'react-redux'
import { changeLaptopRoom } from 'store/Laptop/Laptop.store';

const dummyData = [
  { type: 1, room_name: "lab1", reser: 13, max: 24 },
  { type: 0, room_name: "lab2", reser: 3, max: 24 },
  { type: 0, room_name: "lab3", reser: 9, max: 24 },
  { type: 2, room_name: "lab4", reser: 18, max: 24 }
];

class LaptopList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: [],
      message: []
    };

    this.onClickChangeLaptopName = this.onClickChangeLaptopName.bind();
  }

  componentDidMount() {
    this.forceUpdate();
    dummyData.map(item => {
      switch (item.type) {
        case 0:
          this.state.type.push("yellow");
          this.state.message.push("여유");
          break;
        case 1:
          this.state.type.push("green");
          this.state.message.push("보통");
          break;
        case 2:
          this.state.type.push("red");
          this.state.message.push("혼잡");
          break;
        default:
          break;
      }
      return 0;
    });
  }

  onClickChangeLaptopName = (e, roomName) => {
    const { changeLaptopRoom } = this.props;
    e.stopPropagation();

    changeLaptopRoom(roomName);
  };

  render() {
    return (
      <div className="c-laptop-list">
        <h2 className="c-laptop-list__title">학습실 선택</h2>
        <div className="c-laptop-list__scroll">
          {dummyData.map((item, idx) => {
            return (
              <div className="room" onClick={e => this.onClickChangeLaptopName(e, item.room_name)}>
                <div className="room__left">
                  <div className="room__left--status">
                    <span
                      className={"room__left--status__" + this.state.type[idx]}
                    />
                    <span className="room__left--status__text">
                      <span
                        className={
                          "room__left--status__text--" + this.state.type[idx]
                        }
                      >
                        {this.state.message[idx]}
                      </span>
                    </span>
                  </div>
                  <div className="room__left--name">{item.room_name} 실</div>
                  <div className="room__left--desc">
                    현재인원
                    <span
                      className={"room__left--desc__" + this.state.type[idx]}
                    >
                      {item.reser}
                    </span>
                    / {item.max}명
                  </div>
                </div>
                <div className="room__right">
                  <SmallRoom type={this.state.type[idx]} room={idx + 1} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLaptopRoom: roomName => dispatch(changeLaptopRoom(roomName))
  };
};

export default connect(null, mapDispatchToProps)(LaptopList);
