import React, { Component, Fragment } from 'react'

// UI Components
import Intro from './Intro/Intro'
import SkillsOverview from './SkillsOverview/SkillsOverview'
import Statements from './Statements/Statements'
import GithubActivity from './GithubActivity/GithubActivity'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Intro />
        <SkillsOverview />
        <Statements />
        <GithubActivity />
      </Fragment>
    )
  }
}

export default Home
