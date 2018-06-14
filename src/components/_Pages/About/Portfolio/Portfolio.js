import React, { Component } from 'react'
import ReactGA from 'react-ga'

import H2 from '../../../_Elements/H2/H2'
import CenteredDiv from '../../../../components/_Elements/CenteredDiv/CenteredDiv'

export default class Portfolio extends Component {
  componentDidMount = () => {
    ReactGA.initialize('UA-43588334-2')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

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
