import React, { Component } from 'react'

import H2 from '../../elements/H2/H2'
import Button from '../../elements/Button/Button'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv'

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
            <a href="https://www.linkedin.com/in/yanevgeorgi">linkedin</a>. I
            write code, solve problems and sometimes stream on twitch. "insert
            screenshot of stream" I also love flying FPV drones, 3D printing,
            contributing to open source, and working on side projects such as
            fpvtips.com "insert image of landing drone at feet"
          </p>
          <p>
            I also maintain a blog where I write about life, goals, software and
            flying FPV drones.
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
