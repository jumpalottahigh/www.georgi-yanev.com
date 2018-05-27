import React, { Component, Fragment } from 'react'

import H2 from '../../../_Elements/H2/H2'
import CenteredDiv from '../../../_Elements/CenteredDiv/CenteredDiv'

export default class HobbiesEvents extends Component {
  render() {
    return (
      <Fragment>
        <section style={{ gridColumn: '1/-1' }}>
          <H2>&#123; Hobbies &#125;</H2>
          <CenteredDiv>
            <ul>
              <li>I love spending time with my son.</li>
              <li>I regularly read and write (or think about) code.</li>
              <li>
                I enjoy flying FPV drones and tinkering with electronics and DIY
                projects.
              </li>
              <li>
                I love open source software and try to get involved whenever I
                get the chance.
              </li>
              <li>
                Working on my smart home automation system based on Home
                Assistant
              </li>
              <li>I try to grow veggies in the summer.</li>
            </ul>
            <CenteredDiv style={{ textAlign: 'center' }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/cVTpELazrD8?rel=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                title="Flying FPV quads"
                allowFullScreen
              />
            </CenteredDiv>
          </CenteredDiv>
        </section>
        <section style={{ backgroundColor: '#dedede' }}>
          <H2>&#123; Event participation &#125;</H2>
          <CenteredDiv>
            <ul>
              <li>
                Google Page Speed Hackathon - Mar 2018 - Helsinki, Finland
              </li>
              <li>HelsinkiJS - Jan 2018 - Helsinki, Finland</li>
              <li>Junction Hackathon - Nov 2017 - Helsinki, Finland</li>
              <li>Junction Hackathon - Nov 2016 - Helsinki, Finland</li>
              <li>
                React.js course by Fast Development Company - Mar 2016 -
                Helsinki, Finland
              </li>
              <li>Junction Hackathon - Nov 2015 - Helsinki, Finland</li>
              <li>Microsoft DevShark - Dec 2014 - Helsinki, Finland</li>
            </ul>
          </CenteredDiv>
        </section>
        <section>
          <H2>&#123; Conferences I follow &#125;</H2>
          <CenteredDiv>
            <ul>
              <li>Google I/O (2013, 2015, 2016, 2017, 2018)</li>
              <li>Microsoft Build (2016, 2017)</li>
              <li>Apple WWDC (2015, 2016, 2017)</li>
              <li>Facebook F8 (2016, 2017)</li>
            </ul>
          </CenteredDiv>
        </section>
      </Fragment>
    )
  }
}
