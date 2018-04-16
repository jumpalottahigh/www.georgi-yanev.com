import React, { Component, Fragment } from 'react'

// UI Components
import Intro from './Intro/Intro'
import SkillsOverview from './SkillsOverview/SkillsOverview'
import Statements from './Statements/Statements'
import GithubActivity from './GithubActivity/GithubActivity'
import Inspirational from './Inspirational/Inspirational'
import ReactGA from 'react-ga'

class Home extends Component {
  componentDidMount = () => {
    ReactGA.initialize('UA-43588334-2')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

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
