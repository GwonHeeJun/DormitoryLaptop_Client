import React, { Component } from 'react'
import "./HomeContainer.scss";
import NavigationBar from 'components/NavigationBar/NavigationBar';
import ProfileBar from 'components/ProfileBar/ProfileBar';

export default class HomeContainer extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="home-container__navigation">
                    <NavigationBar />
                </div>
                <div className="home-container__content">
                    <h2 className="home-container__content--title">홈 <small>2019년 12월 16일 월요일</small></h2>
                    <div className="home-container__content--service">

                    </div>
                    <div className="home-container__content--notice">
                        <div className="consultant">

                        </div>
                        <div className="resident">

                        </div>
                    </div>
                    <div className="home-container__content--song">

                    </div>
                </div>
                <div className="home-container__profile">
                    <ProfileBar />
                </div>
            </div>
        )
    }
}
