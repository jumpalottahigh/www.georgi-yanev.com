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
              <strong>Progressive Web Apps</strong>
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
            <li>AMP prototypes</li>
            <li>Gatsby and Nuxt evaluation</li>
            <li>Static site generated pages tests with Grunt</li>
            <li>Puppeteer (headless Chrome) screenshots and tests</li>
            <li>New components and templates</li>
          </ul>
        </CenteredDiv>
      </section>
    )
  }
}
