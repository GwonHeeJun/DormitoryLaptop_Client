import React, { Component } from 'react'
import "./Header.scss";

export default class Header extends Component {
    render() {
        return (
            <div className="c-header">
                <span className="c-header__logo">로고</span>
            </div>
        )
    }
}
