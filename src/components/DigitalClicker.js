// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    increaseOnClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }


    render() {
        return (
            <label>
                Times Clicked
            <button onClick={this.increaseOnClick}>{this.state.timesClicked}</button>
            </label>
        )
    }
}