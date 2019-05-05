import React, { Fragment } from 'react'

import Layout from '../components/Layout/layout.js'

import Intro from '../components/Home/Intro/Intro.js'
import SkillsOverview from '../components/Home/SkillsOverview/SkillsOverview'
import GithubActivity from './../components/Home/GithubActivity/GithubActivity'
import Inspirational from './../components/Home/Inspirational/Inspirational'
import AboutIntro from '../components/About/Intro/Intro.js'

const IndexPage = () => (
  <Layout>
    <Fragment>
      <Intro />
      <SkillsOverview />
      <AboutIntro bgColor="#dedede" />
      <GithubActivity />
      <Inspirational />
    </Fragment>
  </Layout>
)

export default IndexPage
