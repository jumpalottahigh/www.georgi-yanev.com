import React, { Component } from 'react'

import H2 from '../../elements/H2/H2.js'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv.js'

export default class Projects extends Component {
  render() {
    return (
      <section style={{ backgroundColor: '#fafafa' }}>
        <H2>&#123; Latest projects &#125;</H2>
        <CenteredDiv>
          <ul>
            <li>
              <strong>Electron application for image processing</strong>
            </li>
            <li>Getting into TypeScript, Redux</li>
            <li>Reading, generating, re-organizing data</li>
          </ul>
        </CenteredDiv>
        <H2>&#123; Previously &#125;</H2>
        <CenteredDiv>
          <ul>
            <li>
              <strong>
                Web performance, page speed optimization strategies and
                implementation
              </strong>
            </li>
            <li>
              <strong>Progressive Web Apps (PWA)</strong>
            </li>
            <li>
              <strong>
                Migrating sites from Liferay to Adobe Experience Manager CMS
              </strong>
            </li>
            <li>
              Most pages and components on{' '}
              <a
                href="https://www.f-secure.com/en/web/home_global/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.f-secure.com
              </a>
            </li>
            <li>Static sites with Gatsby (React.js), Netlify and Contentful</li>
            <li>Static sites generated with Grunt</li>
            <li>Puppeteer (headless Chrome) screenshots and tests</li>
            <li>Testing with Cypress</li>
            <li>Architecture, components and templates</li>
          </ul>
        </CenteredDiv>
      </section>
    )
  }
}
