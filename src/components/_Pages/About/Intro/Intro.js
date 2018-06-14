import React, { Component } from 'react'

import H2 from '../../../_Elements/H2/H2'
import Button from '../../../_Elements/Button/Button'
import CenteredDiv from '../../../../components/_Elements/CenteredDiv/CenteredDiv'

export default class Intro extends Component {
  render() {
    return (
      <section>
        <H2>&#123; Who &#125;</H2>
        <CenteredDiv>
          <p>
            Here's a{' '}
            <a href="https://blog.georgi-yanev.com/learning/how-i-got-into-software-development/">
              short article recapping the last 18 years of my professional life
            </a>.
          </p>
          <p>
            I maintain a blog where I write about life, goals, software and
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
