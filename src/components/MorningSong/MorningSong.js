import React, { Component } from 'react'
import "./MorningSong.scss";

const dummyData = [
    {},{},{},{},{},{},{}
]

export default class MorningSong extends Component {
    render() {
        return (
            <div className="c-morning-song">
                <div className="c-morning-song__header">
                    <h2>기상음악</h2>
                    <span>내일(12/17)</span>
                </div>
                <div className="c-morning-song__music-list">
                    {dummyData.map((item, idx) => {
                        return (
                            <div className="c-morning-song__music-list--single" key={idx}>

                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
