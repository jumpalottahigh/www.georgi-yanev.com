import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout.js'

import Intro from '../components/About/Intro/Intro.js'
import PastProjects from '../components/About/PastProjects/PastProjects.js'
import Projects from '../components/About/Projects/Projects.js'
import Portfolio from '../components/About/Portfolio/Portfolio.js'
import Education from '../components/About/Education/Education.js'
import SkillTags from '../components/About/SkillTags/SkillTags.js'
import Certificates from '../components/About/Certificates/Certificates.js'
import Uses from '../components/About/Uses/Uses.js'
import HobbiesEvents from '../components/About/HobbiesEvents/HobbiesEvents.js'

const AboutPage = ({ data }) => (
  <Layout>
    <Fragment>
      <Intro />
      <Projects />
      <Portfolio />
      <PastProjects />
      <Education />
      <Certificates />
      <SkillTags collapse="yes" />
      <Uses />
      <HobbiesEvents images={data.allFile.edges} />
    </Fragment>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    allFile(filter: { relativePath: { regex: "hobbies/" } }) {
      edges {
        node {
          id
          name
          relativePath
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 700) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
