import React, { Component } from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Button from '../../../_Elements/Button/Button'
import H2 from '../../../_Elements/H2/H2'

import dataSource from './skillsData.json'
import graph from './skillGraph.svg'
import './SkillTags.css'

const UL = styled.ul`
  display: grid;
  padding: 0;
  justify-self: center;
`
const LI = styled.li`
  display: grid;
  font-size: 1.2rem;
  grid-template-columns: 5fr 3fr;
  border-bottom: 1px solid #cecece;
`
const Description = styled.span`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  font-size: 0.6rem;
`

const ProgressBar = styled.span`
  display: grid;
  align-items: center;
  position: relative;
  background: #dedede;
  border: 1px solid #bbb;
`
const Progress = styled.span`
  position: absolute;
  height: 100%;
  background: #52cf7b;
`

const Label = styled.span`
  position: absolute;
  justify-self: center;
`

export default class SkillTags extends Component {
  state = {
    expandSkills: this.props.collapse === 'yes' ? false : true,
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

        <Tabs>
          <TabList>
            {Object.keys(this.state.filteredSkills).map((item, index) => (
              <Tab key={index}>{item}</Tab>
            ))}
          </TabList>

          {Object.keys(this.state.filteredSkills).map((item, index) => (
            <TabPanel key={index}>
              {this.state.filteredSkills[item].map((skill, i) => (
                <h2 key={i}>{skill.name}</h2>
              ))}
            </TabPanel>
          ))}
        </Tabs>

        <img
          src={graph}
          alt="skill static graph"
          style={{ justifySelf: 'center', maxWidth: '100%' }}
        />

        {!this.state.expandSkills && (
          <Button onClick={this.handleExpandSkills}>Show all</Button>
        )}
        {this.state.expandSkills === true ? (
          <UL>
            {this.state.skills.map((skill, id) => {
              if (!skill) return
              return (
                <LI key={id}>
                  <Description>
                    <span style={{ gridColumn: '1/-1', fontSize: '1.2rem' }}>
                      {skill.name}
                    </span>
                    <span style={{ gridColumn: '1/2' }}>{skill.type}</span>
                    <span style={{ gridColumn: '2/4' }}>
                      {skill.experience}
                    </span>
                    <a
                      href={skill.url}
                      style={{ gridColumn: '1/-1', wordWrap: 'break-word' }}
                    >
                      {skill.url}
                    </a>
                  </Description>
                  <ProgressBar>
                    <Progress style={{ width: `${skill.level}%` }} />
                    <Label>{`${skill.level} %`}</Label>
                  </ProgressBar>
                </LI>
              )
            })}
          </UL>
        ) : null}
      </section>
    )
  }
}
