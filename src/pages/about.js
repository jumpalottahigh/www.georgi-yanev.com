import React, { Fragment } from 'react'
import Layout from '../components/Layout/layout.js'

import Intro from '../components/About/Intro/Intro.js'
import PastProjects from '../components/About/PastProjects/PastProjects.js'
import Projects from '../components/About/Projects/Projects.js'
import Portfolio from '../components/About/Portfolio/Portfolio.js'
import Education from '../components/About/Education/Education.js'
import SkillTagsSimple from '../components/About/SkillTags/SkillTagsSimple.js'
import Certificates from '../components/About/Certificates/Certificates.js'
import Uses from '../components/About/Uses/Uses.js'
import HobbiesEvents from '../components/About/HobbiesEvents/HobbiesEvents.js'
import Bio from '../components/About/Bio/Bio.js'

const AboutPage = () => (
  <Layout>
    <Fragment>
      <Intro />
      <Projects />
      <Portfolio />
      <PastProjects />
      <Education />
      <Certificates />
      <SkillTagsSimple />
      <Uses />
      <HobbiesEvents />
      <Bio />
    </Fragment>
  </Layout>
)

export default AboutPage
