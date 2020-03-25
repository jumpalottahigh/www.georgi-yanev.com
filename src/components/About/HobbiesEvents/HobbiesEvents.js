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

  @media (min-width: 1100px) {
    height: 1275px;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(
          filter: { relativePath: { regex: "/hobbies/" } }
          sort: { fields: name, order: ASC }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 700, quality: 75) {
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
                  href="https://www.youtube.com/channel/UC2gwYMcfb0Oz_fl9W1uTV2Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  flying FPV drones
                </a>{' '}
                <CenteredDiv style={{ textAlign: 'center', margin: '2rem 0' }}>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/sLUk-tq3BE4?rel=0"
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
                HelsinkiJS - March 2019 - Helsinki, Finland @{' '}
                <a href="https://www.tieto.com/">Tieto</a>
                <br />
                Gave second talk about{' '}
                <a href="https://gyanev.com/jamstack/">
                  `JAMstack with Gatsby and Netlify`
                </a>
              </li>
              <li>
                Frontend Finland - March 2019 - Helsinki, Finland @{' '}
                <a href="https://gofore.com/en/home/">Gofore</a>
                <br />
                Gave first talk about{' '}
                <a href="https://gyanev.com/jamstack/">
                  `JAMstack with Gatsby and Netlify`
                </a>
              </li>
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
