import React, { Component } from 'react'

import H2 from '../../../_Elements/H2/H2'
import Button from '../../../_Elements/Button/Button'

export default class Intro extends Component {
  render() {
    return (
      <section>
        <H2>&#123; Who is Georgi Yanev &#125;</H2>
        <p>
          Here's a{' '}
          <a href="https://blog.georgi-yanev.com/general/how-i-got-into-software-development/">
            short article recapping the last 18 years of my professional life
          </a>.
        </p>
        <p>
          I maintain this blog and write about life, goals, software and flying
          FPV drones. Check it out!
        </p>
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
