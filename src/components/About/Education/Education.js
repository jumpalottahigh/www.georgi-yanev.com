import React, { Component } from 'react'
import styled from 'styled-components'

import H2 from '../../elements/H2/H2.js'
import CenteredDiv from '../../elements/CenteredDiv/CenteredDiv.js'

import diploma from './metropolia-university-of-applied-sciences.jpg'

const UL = styled.ul`
  display: grid;
  grid-gap: 10px;
  padding-left: 20px;
`

const Diploma = styled.div`
  display: flex;

  img {
    height: 100px;
    margin-right: 20px;
  }

  p {
    font-weight: bold;
    margin: 0;
    align-self: center;
  }
`

export default class Education extends Component {
  render() {
    return (
      <section>
        <H2>&#123; Education &#125;</H2>
        <CenteredDiv>
          <p className="highlight">
            I believe strongly in life-long education and therefor regularly
            partake in different courses
          </p>
          <UL>
            <li>
              Udacity's Google Developer Challenge Scholarship holder for Mobile
              Web Specialist nanodegree (2017-2018)
            </li>
            <li>Google Analytics certified (2017-2018)</li>
            <li>
              React for Beginners on Egghead.io, CSS grid by Wesbos, The Vue
              book
            </li>
            <li>
              Plethora of tutorials and blog posts closely related to: React,
              Vue, JavaScript, WebComponents, Stencil, Polymer, etc.
            </li>
          </UL>
          <Diploma>
            <img
              src={diploma}
              alt="Georgi Yanev Bachelor Diploma from Helsinki Metropolia University of Applied Sciences"
            />
            <p>
              Bachelor of Engineering (B.E.), Computer Software Engineering
              <br />
              Helsinki Metropolia University of Applied Sciences
            </p>
          </Diploma>
        </CenteredDiv>
      </section>
    )
  }
}
