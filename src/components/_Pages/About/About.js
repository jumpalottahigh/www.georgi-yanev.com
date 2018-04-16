import React, { Component, Fragment } from 'react'

import Intro from './Intro/Intro'
import Portfolio from './Portfolio/Portfolio'
import Education from './Education/Education'
import SkillTags from './SkillTags/SkillTags'
import HobbiesEvents from './HobbiesEvents/HobbiesEvents'
import ReactGA from 'react-ga'

export default class About extends Component {
  componentDidMount = () => {
    ReactGA.initialize('UA-43588334-2')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render() {
    return (
      <Fragment>
        <Intro />
        <Portfolio />
        <Education />
        <SkillTags />
        <HobbiesEvents />
      </Fragment>
    )
  }
}
