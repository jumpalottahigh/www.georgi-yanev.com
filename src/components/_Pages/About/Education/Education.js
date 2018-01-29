import React, { Component } from 'react'
import H2 from '../../../_Elements/H2/H2'

export default class Education extends Component {
  render() {
    return (
      <section>
        <H2>
          I believe strongly in life-long education and therefor regularly
          partake in different courses
        </H2>
        <ul>
          <li>
            Udacity's Google Developer Challenge Scholarship holder for Advanced
            Mobile Web (2017-2018)
          </li>
          <li>Google Analytics advanced (2017-2018)</li>
          <li>Google Analytics basics (2017-2018)</li>
          <li>
            React for Beginners on Egghead.io, CSS grid by Wesbos, The Vue book
          </li>
          <li>
            Plethora of tutorials and blog posts closely related to: React, Vue,
            JavaScript, WebComponents, Stencil, Polymer, etc.
          </li>
        </ul>
        <p>
          University degree: Bachelor of engineering in Information Technology
          with a software engineering major (2013-2016)
        </p>
      </section>
    )
  }
}
