import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import H2 from '../../elements/H2/H2.js'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv.js'
import BaseGrid from '../../elements/Grid/Grid'

const Grid = styled(BaseGrid)`
  padding-bottom: 1rem;

  .grid-image-container {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
  }

  .img-wrapper {
    max-width: 100%;
    margin: 1rem 0;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { regex: "/hobbies/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <section style={{ gridColumn: '1/-1' }}>
          <H2>&#123; Hobbies &#125;</H2>
          <CenteredDiv>
            <ul>
              <li>
                I enjoy{' '}
                <a
                  href="https://blog.georgi-yanev.com/fpv/build-a-quad/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  building
                </a>{' '}
                and{' '}
                <a
                  href="https://www.youtube.com/watch?v=aASDUpVy3zM&list=PLxuusHIzi2UoSYK9fHSvJF_fUiVeo35ka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  flying FPV drones
                </a>{' '}
                <CenteredDiv style={{ textAlign: 'center', margin: '2rem 0' }}>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/W_TeQMJbjgM?rel=0"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    title="Flying FPV quads"
                    allowFullScreen
                  />
                </CenteredDiv>
              </li>
              <li>I regularly read and write (or think about) code.</li>
              <li>
                I try to contribute to open source software whenever I get the
                chance.
              </li>
              <li>
                I maintain a{' '}
                <a
                  href="https://github.com/jumpalottahigh/YAR-Home-Assistant-Configuration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  smart home automation system
                </a>{' '}
                based on Home Assistant
              </li>
              <li>I like NASA, Space X and all sorts of space stuff</li>
            </ul>
          </CenteredDiv>
          <Grid col600="1" col900="1" col1200="1">
            {data.allFile.edges.map(({ node }) => (
              <div key={node.id} className="grid-image-container">
                <div className="img-wrapper">
                  <Img fluid={node.childImageSharp.fluid} alt={node.name} />
                </div>
              </div>
            ))}
          </Grid>
        </section>
        <section style={{ backgroundColor: '#dedede' }}>
          <H2>&#123; Event participation &#125;</H2>
          <CenteredDiv>
            <ul>
              <li>
                HelsinkiJS - Dec 2018 - Helsinki, Finland @{' '}
                <a href="https://www.citrus.fi/">Citrus</a>
              </li>
              <li>Junction Hackathon - Nov 2018 - Helsinki, Finland</li>
              <li>
                React Helsinki - Aug 2018 - Helsinki, Finland @{' '}
                <a href="https://www.smartly.io/">Smartly.io</a>
              </li>
              <li>
                Google Page Speed Hackathon - Mar 2018 - Helsinki, Finland
              </li>
              <li>
                HelsinkiJS - Jan 2018 - Helsinki, Finland @{' '}
                <a href="https://uusi.op.fi">OP</a>
              </li>
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
              <li>Apple WWDC (2015, 2016, 2017, 2018)</li>
              <li>Facebook F8 (2016, 2017)</li>
            </ul>
          </CenteredDiv>
        </section>
      </>
    )}
  />
)
