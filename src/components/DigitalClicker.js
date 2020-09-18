// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalCliker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0 
        }
    }

    handleClick = () => {
        let newClick = this.state.timesClicked + 1
        this.setState({
            timesClicked: newClick
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }

}




