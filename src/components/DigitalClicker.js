// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
          timesClicked: 0
        }
    }
    
    handleClick = () => {
        const addClick = this.state.timesClicked + 1
        this.setState({
            timesClicked: addClick
        })
    }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

