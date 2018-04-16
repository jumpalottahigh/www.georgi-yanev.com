import React, { Component } from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'

import H2 from '../../../_Elements/H2/H2'

import data from './skillsData.json'

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
  background: burlywood;
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
    skills: [...data]
  }

  componentDidMount = () => {
    ReactGA.initialize('UA-43588334-2')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render() {
    return (
      <section id="skills" style={{ gridColumn: '1/-1' }}>
        <H2>&#123; Skills &#125;</H2>
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
                  <span style={{ gridColumn: '2/4' }}>{skill.experience}</span>
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
      </section>
    )
  }
}
