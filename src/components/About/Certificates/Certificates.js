import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

import H2 from '../../elements/H2/H2'
import Grid from '../../elements/Grid/Grid'

const ImgLinkContainer = styled(Grid)`
  grid-gap: 1rem;
`

const ImgLink = styled.a`
  text-align: center;
`

const ImgWrapper = styled.div`
  max-width: 100%;
  .image-container {
    margin: 1rem auto;
    border-radius: 4px;
    max-width: 350px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: 225ms;

    &:hover {
      box-shadow: 0 7px 18px rgba(0, 0, 0, 0.25), 0 7px 10px rgba(0, 0, 0, 0.22);
    }
  }
`

const certificateData = {
  aem: {
    link: 'https://drive.google.com/open?id=1heLaaswoCq3TJ2CAPWkwOJuUxI8D-lzP',
    text: 'Develop Websites and Components in Adobe Experience Manager',
  },
  mws: {
    link: 'https://confirm.udacity.com/KSG5UP2N',
    text: 'Udacity Mobile Web Specialist Nanodegree',
  },
  ga: {
    link: 'https://academy.exceedlms.com/student/users/1209835',
    text: 'Google Analytics individual qualification',
  },
  gcp: {
    link:
      'https://www.coursera.org/account/accomplishments/certificate/F6JD85D4SK58',
    text: 'Google Cloud Platform Fundamentals Coursera',
  },
}

const Certificates = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { regex: "/certificates/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 350) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      // Mutate image data to include link and text information
      let certificates = []

      data.allFile.edges.forEach(({ node }) => {
        if (node.name.includes('aem')) {
          node.certificateData = certificateData.aem
        }

        if (node.name.includes('mobile-web-specialist')) {
          node.certificateData = certificateData.mws
        }

        if (node.name.includes('google-analytics')) {
          node.certificateData = certificateData.ga
        }

        if (node.name.includes('google-cloud-platform')) {
          node.certificateData = certificateData.gcp
        }

        certificates.push(node)
      })

      return (
        <section style={{ backgroundColor: '#dedede' }}>
          <H2 style={{ marginBottom: '1rem' }}>&#123; Certificates &#125;</H2>
          <ImgLinkContainer col600="1" col900="2" col1200="3">
            {certificates.map(c => (
              <ImgLink
                key={c.id}
                href={c.certificateData.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImgWrapper>
                  <Img
                    className="image-container"
                    fluid={c.childImageSharp.fluid}
                    alt={c.name}
                  />
                </ImgWrapper>
                <p>{c.certificateData.text}</p>
              </ImgLink>
            ))}
          </ImgLinkContainer>
        </section>
      )
    }}
  />
)

export default Certificates
