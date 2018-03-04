import React, { Component } from 'react'
import H2 from '../../../_Elements/H2/H2'

export default class Portfolio extends Component {
  render() {
    return (
      <section style={{ backgroundColor: 'beige' }}>
        <H2>&#123; Latest projects &#125;</H2>
        <ul>
          <li>
            <strong>PWA prototype with React.js</strong>
          </li>
          <li>
            Most pages on{' '}
            <a
              href="https://www.f-secure.com/en/web/home_global/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.f-secure.com
            </a>
          </li>
          <li>AMP prototype</li>
          <li>Gatsby and Nuxt evaluation</li>
          <li>Static site generated pages tests with Grunt</li>
          <li>Puppeteer (headless Chrome) screenshots and tests</li>
          <li>New components and templates</li>
        </ul>
      </section>
    )
  }
}