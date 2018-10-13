import React, { Component } from 'react'
import styled from 'styled-components'

import H2 from '../../elements/H2/H2'
import Button from '../../elements/Button/Button'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv'

import streamingOnTwitch from './streaming-on-twitch.png'
import landingAQuad from './landing-a-quad-1.mp4'

const VideoWrapper = styled.div`
  video {
    display: none;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    max-width: 70ch;
  }

  @media (min-width: 800px) {
    video {
      display: block;
    }
  }
`

export default class Intro extends Component {
  render() {
    return (
      <section>
        <H2>&#123; Hi &#125;</H2>
        <CenteredDiv>
          <p>
            I'm Georgi,{' '}
            <a href="https://blog.georgi-yanev.com/learning/how-i-got-into-software-development/">
              web developer
            </a>
            . You can find me on{' '}
            <a href="https://twitter.com/jumpalottahigh">twitter</a>,{' '}
            <a href="https://github.com/jumpalottahigh">github</a>,{' '}
            <a href="https://twitch.com/jumpalottahigh">twitch</a> and{' '}
            <a href="https://www.linkedin.com/in/yanevgeorgi">linkedin</a>.
            <br />
            <br />I <strong>write code</strong>, solve problems and sometimes
            stream on twitch.
            <br />
            <br />
            <img
              src={streamingOnTwitch}
              alt="Georgi streaming on twitch screenshot"
              style={{ width: '100%', maxWidth: '800px', margin: '10px 0' }}
            />
            <br />
            <br />I also <strong>love flying FPV drones</strong>, 3D printing,
            contributing to open source, and working on side projects such as{' '}
            <a href="https://fpvtips.com">fpvtips.com</a>.<br />
            <br />
          </p>
          <VideoWrapper>
            <video autoPlay loop id="video-background" muted playsInline>
              <source src={landingAQuad} type="video/mp4" />
            </video>
          </VideoWrapper>
          <br />
          <br />
          <p>
            I also <strong>maintain a blog</strong> where I write about life,
            goals, software and flying FPV drones.
          </p>
        </CenteredDiv>
        <a
          href="https://blog.georgi-yanev.com"
          style={{ justifySelf: 'center' }}
        >
          <Button>Blog</Button>
        </a>
      </section>
    )
  }
}
