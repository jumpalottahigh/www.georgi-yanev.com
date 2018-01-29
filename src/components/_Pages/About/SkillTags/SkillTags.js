import React, { Component } from 'react'
import styled from 'styled-components'
import fire from '../../../../fire'

import H2 from '../../../_Elements/H2/H2'

const UL = styled.ul`
  display: grid;
  padding: 0;
`
const LI = styled.li`
  display: grid;
  font-size: 1.2rem;
  grid-template-columns: 5fr 2fr;
  border-bottom: 1px solid #cecece;
`
const Description = styled.span`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
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
  left: 45%;
  text-align: center;
`

export default class SkillTags extends Component {
  constructor(props) {
    super(props)

    this.state = {
      skills: []
    }
  }

  async componentWillMount() {
    let skillsRef = fire
      .database()
      .ref('skills')
      .orderByKey()
      .limitToLast(100)
    skillsRef.on('child_added', snapshot => {
      console.log(snapshot.val())
      let skill = { ...snapshot.val(), id: snapshot.key }
      this.setState({ skills: [skill].concat(this.state.skills) })
    })
  }

  render() {
    return (
      <section>
        <H2>Skills</H2>
        <UL>
          {this.state.skills.map(skill => (
            <LI key={skill.id}>
              <Description>
                <span style={{ gridColumn: '1/-1', fontSize: '1.2rem' }}>
                  {skill.name}
                </span>
                <span style={{ gridColumn: '1/2' }}>{skill.type}</span>
                <span style={{ gridColumn: '2/3' }}>{skill.experience}</span>
                <span style={{ gridColumn: '3/-1' }}>{skill.url}</span>
              </Description>
              <ProgressBar>
                <Progress style={{ width: `${skill.level}%` }} />
                <Label>{`${skill.level} %`}</Label>
              </ProgressBar>
            </LI>
          ))}
        </UL>
      </section>
    )
  }
}
