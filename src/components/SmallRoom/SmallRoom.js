import React, { Component } from 'react'
import "./SmallRoom.scss";

const dummy = [{},{},{},{}]

export default class RoomDesc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }
    }


    
    render() {
        return (
            <div className="c-small-room">
                <div className="c-small-room__list">
                    <div className={5 === this.props.room ? "self__"+this.props.type : "self"}>
                        <span>자</span>
                    </div>
                    {dummy.map((item, idx) => {
                        return (
                        <div className="lab" key={idx}>
                            <div className={idx + 1 === this.props.room ? "lab__"+this.props.type : "lab__none"}>
                                <span>{idx + 1}</span>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
