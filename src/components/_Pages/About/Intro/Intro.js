import React, { Component } from 'react'

import H2 from '../../../_Elements/H2/H2'
import Button from '../../../_Elements/Button/Button'

const CTA = Button.extend`
  margin: 0;
  font-size: 1.2rem;
  width: 8rem;
`

export default class Intro extends Component {
  render() {
    return (
      <section>
        <H2>Intro section</H2>
        <p>
          Here's an{' '}
          <a href="https://blog.georgi-yanev.com/general/how-i-got-into-software-development/">
            article quickly recapping the last 18 years of my life
          </a>{' '}
          and the journey so far.
        </p>
        <p>
          If you want to learn more about me and my hobbies, the blog contains
          plenty of articles you can have a look at.
        </p>
        <a href="https://blog.georgi-yanev.com">
          <CTA>Blog</CTA>
        </a>
      </section>
    )
  }
}
