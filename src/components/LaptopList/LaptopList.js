import React, { Component } from "react";
import "./LaptopList.scss";
import SmallRoom from "components/SmallRoom/SmallRoom";
import { connect } from "react-redux";
import { changeLaptopRoom } from "store/Laptop/Laptop.store";
import { laptopRoomList } from "lib/laptop";

class LaptopList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: [],
      message: [],
      roomList: [],
      roomSeatDesc: []
    };

    this.onClickChangeLaptopName = this.onClickChangeLaptopName.bind();
  }

  componentDidMount() {
    this.forceUpdate();
    laptopRoomList()
      .then(res => this.setState({ roomList: res.data.rooms }))
      .catch(err => console.log(err));
    this.forceUpdate();
  }

  onClickChangeLaptopName = (e, roomName) => {
    const { changeLaptopRoom } = this.props;
    e.stopPropagation();
    if (roomName === "self") {
      alert("현재 추가되지 않은 실입니다.");
      return;
    }
    changeLaptopRoom(roomName);
  };

  render() {
    return (
      <div className="c-laptop-list">
        <h2 className="c-laptop-list__title">학습실 선택</h2>
        <div className="c-laptop-list__scroll">
          {this.state.roomList.map((item, idx) => {
            return (
              <div
                className="room"
                onClick={e => this.onClickChangeLaptopName(e, item.room)}
                key={idx}
              >
                <div className="room__left">
                  <div className="room__left--status">
                    <span className={"room__left--status__" + item.type} />
                    <span className="room__left--status__text">
                      <span
                        className={"room__left--status__text--" + item.type}
                      >
                        {item.message}
                      </span>
                    </span>
                  </div>
                  <div className="room__left--name">{item.name}</div>
                  <div className="room__left--desc">
                    현재인원
                    <span className={"room__left--desc__" + item.type}>
                      {item.seats}
                    </span>
                    / {item.size}명
                  </div>
                </div>
                <div className="room__right">
                  <SmallRoom type={item.type} room={idx + 1} key={idx} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    roomName: state.laptop.roomName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLaptopRoom: roomName => dispatch(changeLaptopRoom(roomName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LaptopList);
