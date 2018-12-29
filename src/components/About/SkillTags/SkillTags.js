import React, { Component } from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import H2 from '../../elements/H2/H2.js'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv.js'

import dataSource from './skillsData.json'
import graph from './skillGraph.svg'
import './SkillTags.css'

const Section = styled.section`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: 2fr 1fr;

    .heading {
      grid-column: 1 / -1;
    }

    .subsection {
      align-self: center;
    }
  }
`

export default class SkillTags extends Component {
  state = {
    skills: [...dataSource],
    filteredSkills: null,
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
      expandSkills: !prevState.expandSkills,
    }))
  }

  UNSAFE_componentWillMount = () => {
    this.setState({
      filteredSkills: this.filter(dataSource),
    })
  }

  render() {
    return (
      <Section id="skills">
        <H2 className="heading">&#123; Skills &#125;</H2>
        <CenteredDiv className="subsection">
          <img
            src={graph}
            alt="skill static graph"
            style={{ justifySelf: 'center', maxWidth: '100%' }}
          />
        </CenteredDiv>
        <CenteredDiv className="subsection">
          <Tabs>
            <TabList>
              {Object.keys(this.state.filteredSkills).map((item, index) => (
                <Tab key={index} style={{ color: '#204CCF' }}>
                  {item}
                </Tab>
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
      </Section>
    )
  }
}
