import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

import H2 from '../../elements/H2/H2'
import Button from '../../elements/Button/Button'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv'

import landingAQuad from './landing-a-quad-1.mp4'
import landingAQuadWebm from './landing-a-quad-1.webm'

const VideoWrapper = styled.div`
  video {
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: auto;
    z-index: -100;
    max-width: 70ch;
  }
`

export default ({ bgColor }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { regex: "/intro/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section style={{ backgroundColor: bgColor || '#fff' }}>
        <H2>&#123; Hi &#125;</H2>
        <CenteredDiv>
          <div>
            I'm Georgi,{' '}
            <a href="https://blog.georgi-yanev.com/learning/how-i-got-into-software-development/">
              software engineer
            </a>
            . You can find me on{' '}
            <a href="https://twitter.com/jumpalottahigh">twitter</a>,{' '}
            <a href="https://github.com/jumpalottahigh">github</a>,{' '}
            <a href="https://twitch.tv/jumpalottahigh">twitch</a> and{' '}
            <a href="https://www.linkedin.com/in/yanevgeorgi">linkedin</a>.
            <br />
            <br />I <strong>write code</strong>, solve problems and sometimes
            stream on twitch.
            <br />
            <br />
            <div
              style={{
                width: '100%',
                maxWidth: '800px',
                margin: '10px 0',
              }}
            >
              <Img
                fluid={data.allFile.edges[0].node.childImageSharp.fluid}
                alt="Georgi streaming on twitch screenshot"
              />
            </div>
            <br />
            <br />I <strong>love flying FPV drones</strong>, 3D printing,
            contributing to open source, and working on side projects such as{' '}
            <a href="https://fpvtips.com">fpvtips.com</a>.<br />
            <br />
          </div>
          <VideoWrapper>
            <Fade>
              <video autoPlay id="video-background" muted playsInline>
                <source src={landingAQuadWebm} type="video/webm" />
                <source src={landingAQuad} type="video/mp4" />
              </video>
            </Fade>
          </VideoWrapper>
          <br />
          <br />
          <p>
            I also <strong>maintain a blog</strong> where I write about life,
            goals, software and flying FPV drones.
          </p>
        </CenteredDiv>
        <a
          href="https://blog.georgi-yanev.com"
          style={{ justifySelf: 'center' }}
        >
          <Button>Blog</Button>
        </a>
      </section>
    )}
  />
)
