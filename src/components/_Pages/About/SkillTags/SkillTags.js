import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import H2 from '../../../_Elements/H2/H2'
import CenteredDiv from '../../../_Elements/CenteredDiv/CenteredDiv'

import dataSource from './skillsData.json'
import graph from './skillGraph.svg'
import './SkillTags.css'

export default class SkillTags extends Component {
  state = {
    skills: [...dataSource],
    filteredSkills: null
  }

  filter(skillData) {
    let filtered = {}

    skillData.forEach(skill => {
      if (!filtered.hasOwnProperty(skill.type)) {
        filtered[skill.type] = []
      }
      filtered[skill.type].push(skill)
    })

    return filtered
  }

  handleExpandSkills = () => {
    this.setState(prevState => ({
      expandSkills: !prevState.expandSkills
    }))
  }

  componentWillMount = () => {
    this.setState({
      filteredSkills: this.filter(dataSource)
    })
  }

  componentDidMount = () => {
    ReactGA.initialize('UA-43588334-2')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render() {
    return (
      <section id="skills" style={{ gridColumn: '1/-1' }}>
        <H2>&#123; Skills &#125;</H2>

        <img
          src={graph}
          alt="skill static graph"
          style={{ justifySelf: 'center', maxWidth: '100%' }}
        />

        <CenteredDiv>
          <Tabs>
            <TabList>
              {Object.keys(this.state.filteredSkills).map((item, index) => (
                <Tab key={index}>{item}</Tab>
              ))}
            </TabList>

            {Object.keys(this.state.filteredSkills).map((item, index) => (
              <TabPanel key={index}>
                {this.state.filteredSkills[item].map((skill, i) => (
                  <h5 className="skill-tag" key={i}>
                    {skill.name}
                  </h5>
                ))}
              </TabPanel>
            ))}
          </Tabs>
        </CenteredDiv>
      </section>
    )
  }
}
