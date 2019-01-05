import React, { Component } from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

import H2 from '../../elements/H2/H2.js'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv.js'

import skillTags from './skillsData.json'

const SkillTagsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  padding-top: 1rem;

  span {
    font-weight: 500;
  }

  a {
    margin: 0 0.4rem;
  }

  .skill:after {
    margin: 0.15rem;
    content: '❟ ';
  }
`

export default class SkillTags extends Component {
  render() {
    return (
      <section id="skills">
        <H2 className="heading">&#123; Skills &#125;</H2>
        <CenteredDiv className="subsection">
          <SkillTagsContainer>
            {skillTags.map(skill => (
              <React.Fragment key={skill.name}>
                <a href={skill.url} data-tip data-for={skill.name}>
                  <span className="skill">{skill.name}</span>
                </a>
                <ReactTooltip id={skill.name}>
                  <div>Experience: {skill.experience}</div>
                  <div>Level: {skill.level} / 100</div>
                  <div>Type: {skill.type}</div>
                </ReactTooltip>
              </React.Fragment>
            ))}
          </SkillTagsContainer>
        </CenteredDiv>
      </section>
    )
  }
}
