// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }
    
    handleBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12}
        })
    }

    handleResClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                resolution: '720p'}}
        })
    }

  render() {
      
    return (
        <div>
            <button onClick={this.handleBitrateClick} className='bitrate'>bitrate {this.state.settings.bitrate}</button>
            <button onClick={this.handleResClick} className='resolution'>resolution {this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
