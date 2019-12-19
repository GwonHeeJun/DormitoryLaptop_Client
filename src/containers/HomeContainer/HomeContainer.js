import React, { Component } from 'react'
import "./HomeContainer.scss";
import NavigationBar from 'components/NavigationBar/NavigationBar';
import ProfileBar from 'components/ProfileBar/ProfileBar';
import ServiceBanner from 'components/ServiceBanner/ServiceBanner';
import Notice from 'components/Notice/Notice';
import MorningSong from 'components/MorningSong/MorningSong';

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
                        <ServiceBanner />
                    </div>
                    <div className="home-container__content--notice">
                        <div className="consultant">
                            <Notice title="자치 위원회"/>
                        </div>
                        <div className="resident">
                            <Notice title="사감 선생님"/>
                        </div>
                    </div>
                    <div className="home-container__content--song">
                        <MorningSong />
                    </div>
                </div>
                <div className="home-container__profile">
                    <ProfileBar />
                </div>
            </div>
        )
    }
}
