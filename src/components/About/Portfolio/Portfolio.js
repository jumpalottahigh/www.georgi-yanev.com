import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

import Grid from '../../elements/Grid/Grid'
import H2 from '../../elements/H2/H2.js'

const ImgLinkContainer = styled(Grid)`
  padding: 1rem 2rem;
  grid-gap: 2rem;
`

const ImgLink = styled.a`
  text-align: center;
`

const ImgWrapper = styled.div`
  max-width: 100%;

  .image-container {
    margin-bottom: 1rem;
    border-radius: 4px;
    max-width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: 225ms;

    &:hover {
      box-shadow: 0 7px 18px rgba(0, 0, 0, 0.25), 0 7px 10px rgba(0, 0, 0, 0.22);
    }
  }
`

const portfolioData = {
  fpvtips: {
    link: 'https://www.fpvtips.com/',
    text: 'www.fpvtips.com',
  },
  baehrbg: {
    link: 'https://www.baehrbg.com/',
    text: 'www.baehrbg.com',
  },
  georgiBlog: {
    link: 'https://blog.georgi-yanev.com/',
    text: 'blog.georgi-yanev.com',
  },
  georgiWWW: {
    link: 'https://www.georgi-yanev.com/',
    text: 'www.georgi-yanev.com',
  },
  udacityMWS: {
    link: 'https://udacity-mws-georgi.netlify.com/',
    text: 'udacity-mws-georgi.netlify.com',
  },
  youtubeScreenshot: {
    link: 'https://youtube-screenshot.netlify.com/',
    text: 'youtube-screenshot.netlify.com',
  },
  streamerScreen: {
    link: 'https://streamer-screen.netlify.com/',
    text: 'streamer-screen.netlify.com',
  },
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { regex: "/portfolio/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      // Mutate image data to include link and text information
      let portfolio = []

      data.allFile.edges.forEach(({ node }) => {
        if (node.name.includes('fpvtips')) {
          node.portfolioData = portfolioData.fpvtips
          portfolio.unshift(node)
          return
        }

        if (node.name.includes('baehr')) {
          node.portfolioData = portfolioData.baehrbg
          portfolio.unshift(node)
          return
        }

        if (node.name.includes('blog')) {
          node.portfolioData = portfolioData.georgiBlog
          portfolio.unshift(node)
          return
        }

        if (node.name.includes('georgi-yanev.com')) {
          node.portfolioData = portfolioData.georgiWWW
        }

        if (node.name.includes('mobile-web-specialist')) {
          node.portfolioData = portfolioData.udacityMWS
        }

        if (node.name.includes('streamer-screen')) {
          node.portfolioData = portfolioData.streamerScreen
        }

        if (node.name.includes('youtube-screenshot')) {
          node.portfolioData = portfolioData.youtubeScreenshot
        }

        portfolio.push(node)
      })

      return (
        <section>
          <H2>&#123; Things I've built &#125;</H2>
          <ImgLinkContainer col600="1" col900="2" col1200="3">
            {portfolio.map(p => (
              <ImgLink
                key={p.id}
                href={p.portfolioData.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImgWrapper>
                  <Img
                    className="image-container"
                    fluid={p.childImageSharp.fluid}
                    alt={p.name}
                  />
                </ImgWrapper>
                <p>{p.portfolioData.text}</p>
              </ImgLink>
            ))}
          </ImgLinkContainer>
        </section>
      )
    }}
  />
)
