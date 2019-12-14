import React, { Component } from 'react'
import BackImage from 'assets/image/backImage.png';
import "./MainContainer.scss";
import Header from 'components/Header/Header';
import Choose from 'components/Choose/Choose';

export default class MainContainer extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="main-container__forms">
                    <Header />
                    <Choose />
                </div>
                <div className="main-container__image-box">
                    <img src={BackImage} alt="BackGroundImage" />
                </div>
            </div>
        )
    }
}
