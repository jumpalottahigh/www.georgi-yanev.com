import React, { Component } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'

const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  height: 35%;

  .video-background {
    /* position: fixed; */
    position: absolute;
    background: #000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -99;
    &::after {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: rgba(0, 0, 0, 0.15);
    }
  }

  .video-foreground,
  .video-background iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  @media (min-aspect-ratio: 16/9) {
    .video-foreground {
      height: 300%;
      top: -100%;
    }
  }
  @media (max-aspect-ratio: 16/9) {
    .video-foreground {
      width: 300%;
      left: -100%;
    }
  }
`

export default class VideoBackground extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute()
  }

  _onEnd(event) {
    event.target.playVideo()
  }

  render() {
    const videoOptions = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
      },
    }

    const { videoId } = this.props

    return (
      <VideoWrapper>
        <div className="video-background">
          <div className="video-foreground">
            <YouTube
              videoId={videoId}
              opts={videoOptions}
              className="video-iframe"
              onReady={this._onReady}
              onEnd={this._onEnd}
            />
          </div>
        </div>
      </VideoWrapper>
    )
  }
}
