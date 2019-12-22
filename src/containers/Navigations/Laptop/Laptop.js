import React, { Component } from 'react'
import "./Laptop.scss";
import ServiceBanner from 'components/ServiceBanner/ServiceBanner';
import LaptopList from 'components/LaptopList/LaptopList';
import LaptopSeat from 'components/LaptopSeat/LaptopSeat';

export default class Laptop extends Component {
    render() {
        return (
            <React.Fragment>
              <h2 className="laptop-title">
               노트북 대여
              </h2>
              <div className="laptop-content">
                <div className="laptop-content__header">
                    <ServiceBanner />
                </div>
                <div className="laptop-content__body">
                    <div className="laptop-content__body--list">
                        <LaptopList />
                    </div>
                    <div className="laptop-content__body--seat">
                        <LaptopSeat />
                    </div>
                </div>
              </div>
            </React.Fragment>
        )
    }
}
