// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component{

    state = {
        timesClicked: 0
    }

    increment = ()=>{
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return(
            <button onClick={this.increment}>{this.state.timesClicked}</button>
        )
    }
}