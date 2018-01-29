import React, { Component, Fragment } from 'react'

import Intro from './Intro/Intro'
import Education from './Education/Education'
import SkillTags from './SkillTags/SkillTags'
import HobbiesEvents from './HobbiesEvents/HobbiesEvents'

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <Intro />
        <Education />
        <SkillTags />
        <HobbiesEvents />
      </Fragment>
    )
  }
}
