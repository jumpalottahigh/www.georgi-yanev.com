import React, { Fragment } from 'react'

import Layout from '../components/Layout/layout.js'

import Intro from '../components/About/Intro/Intro.js'
import Portfolio from '../components/About/Portfolio/Portfolio.js'
import Education from '../components/About/Education/Education.js'
import SkillTags from '../components/About/SkillTags/SkillTags.js'
import Certificates from '../components/About/Certificates/Certificates.js'
import Uses from '../components/About/Uses/Uses.js'
import HobbiesEvents from '../components/About/HobbiesEvents/HobbiesEvents.js'

const AboutPage = () => (
  <Layout>
    <Fragment>
      <Intro />
      <Portfolio />
      <Education />
      <Certificates />
      <SkillTags collapse="yes" />
      <Uses />
      <HobbiesEvents />
    </Fragment>
  </Layout>
)

export default AboutPage
