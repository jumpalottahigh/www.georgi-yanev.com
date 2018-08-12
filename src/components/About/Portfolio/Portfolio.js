import React, { Component } from 'react'

import H2 from '../../elements/H2/H2.js'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv.js'

export default class Portfolio extends Component {
  render() {
    return (
      <section style={{ backgroundColor: '#dedede' }}>
        <H2>&#123; Latest projects &#125;</H2>
        <CenteredDiv>
          <ul>
            <li>
              <strong>Progressive Web Apps (PWA)</strong>
            </li>
            <li>
              <strong>Work with Adobe Experience Manager CMS</strong>
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
            <li>Static sites with Gatsby and Nuxt</li>
            <li>Static site generated pages tests with Grunt</li>
            <li>Puppeteer (headless Chrome) screenshots and tests</li>
            <li>New components and templates</li>
            <li>AMP projects</li>
          </ul>
        </CenteredDiv>
        <CenteredDiv>
          <h5 style={{ textAlign: 'center' }}>Some examples:</h5>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridGap: '10px',
            }}
          >
            <li>
              <a href="https://youtube-screenshot.netlify.com/">
                YouTube Timestamp Screenshot PWA
              </a>
            </li>
            <li>
              <a href="https://baehrbg.netlify.com/">BAEHR BG</a>
            </li>
            <li>
              Blogging regularly at{' '}
              <a href="https://blog.georgi-yanev.com/">blog.georgi-yanev.com</a>
            </li>
          </ul>
        </CenteredDiv>
      </section>
    )
  }
}
