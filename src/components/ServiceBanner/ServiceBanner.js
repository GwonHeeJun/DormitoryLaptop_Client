import React, { Component } from 'react'
import { ReactComponent as Beta } from 'assets/image/beta.svg';
import "./ServiceBanner.scss";

export default class ServiceBanner extends Component {
    render() {
        return (
            <div className="c-service-banner">
                <div className="c-service-banner__desc">
                    <h2>Beta 서비스 중입니다.</h2>
                    <span>정식 서비스 : 2020년 1학기 예정</span>
                </div>
                <div className="c-service-banner__icon">
                    <Beta />
                </div>
            </div>
        )
    }
}
