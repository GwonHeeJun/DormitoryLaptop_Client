import React, { Component } from 'react'
import "./HomeContainer.scss";
import NavigationBar from 'components/NavigationBar/NavigationBar';

export default class HomeContainer extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="home-container__navigation">
                    <NavigationBar />
                </div>
                <div className="home-container__content">

                </div>
                <div className="home-container__profile">

                </div>
            </div>
        )
    }
}
