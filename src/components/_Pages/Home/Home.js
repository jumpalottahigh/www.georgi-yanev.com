import React, { Component, Fragment } from 'react'

// UI Components
import Intro from './Intro/Intro'
import SkillsOverview from './SkillsOverview/SkillsOverview'
import Statements from './Statements/Statements'
import GithubActivity from './GithubActivity/GithubActivity'
import Inspirational from './Inspirational/Inspirational'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Intro />
        <SkillsOverview />
        <Statements />
        <GithubActivity />
        <Inspirational />
      </Fragment>
    )
  }
}

export default Home
