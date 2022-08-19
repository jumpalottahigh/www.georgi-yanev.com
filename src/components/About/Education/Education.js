import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

import H2 from '../../elements/H2/H2.js'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv.js'

const Ul = styled.ul`
  display: grid;
  grid-gap: 10px;
  padding-left: 20px;
`

const Diploma = styled.div`
  display: flex;

  .diploma-image {
    width: 74px;
    height: 100px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  p {
    font-weight: bold;
    margin: 0;
    align-self: center;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { regex: "/education/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 74) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <section>
        <H2>&#123; Education &#125;</H2>
        <CenteredDiv>
          <p className="highlight">
            I believe strongly in life-long education and therefor regularly
            partake in different courses.
          </p>
          <Diploma>
            <div className="diploma-image">
              <Img
                fluid={data.allFile.edges[0].node.childImageSharp.fluid}
                alt="Georgi Yanev Bachelor Diploma from Helsinki Metropolia University of Applied Sciences"
              />
            </div>
            <p>
              Master of Engineering (MEng), Information Technology
              <br />
              Helsinki Metropolia University of Applied Sciences
            </p>
          </Diploma>
          <Ul>
            <li>
              Udacity's Google Developer Challenge Scholarship holder for Mobile
              Web Specialist nanodegree (2017-2018)
            </li>
            <li>Google Analytics certified (2017-2018)</li>
            <li>
              React for Beginners on Egghead.io, CSS grid by Wesbos, The Vue
              book
            </li>
            <li>
              Plethora of tutorials and blog posts closely related to: React,
              Vue, JavaScript, WebComponents, Stencil, Polymer, etc.
            </li>
          </Ul>
          <Diploma>
            <div className="diploma-image">
              <Img
                fluid={data.allFile.edges[0].node.childImageSharp.fluid}
                alt="Georgi Yanev Bachelor Diploma from Helsinki Metropolia University of Applied Sciences"
              />
            </div>
            <p>
              Bachelor of Engineering (B.E.), Computer Software Engineering
              <br />
              Helsinki Metropolia University of Applied Sciences
            </p>
          </Diploma>
        </CenteredDiv>
      </section>
    )}
  />
)
