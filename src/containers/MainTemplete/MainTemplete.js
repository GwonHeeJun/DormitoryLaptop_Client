import React, { Component } from 'react'
import Header from 'components/Header/Header'

export default class MainTemplete extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                {this.props.children}
            </React.Fragment>
        )
    }
}
