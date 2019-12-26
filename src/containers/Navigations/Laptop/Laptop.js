import React, { Component } from "react";
import "./Laptop.scss";
import ServiceBanner from "components/ServiceBanner/ServiceBanner";
import LaptopList from "components/LaptopList/LaptopList";
import LaptopDesc from "components/LaptopDesc/LaptopDesc";
import { myLaptop } from "lib/laptop";

export default class Laptop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myRoom: "",
      mySeat: 0
    };
  }

  componentDidMount() {
    myLaptop()
      .then(res =>
        this.setState({ myRoom: res.data.room, mySeat: res.data.seat })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="laptop-title">노트북 대여</h2>
        <div className="laptop-content">
          <div className="laptop-content__header">
            <ServiceBanner banner="laptop" myRoom={this.state.myRoom} mySeat={this.state.mySeat}/>
          </div>
          <div className="laptop-content__body">
            <div className="laptop-content__body--list">
              <LaptopList />
            </div>
            <div className="laptop-content__body--seat">
              <LaptopDesc />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
