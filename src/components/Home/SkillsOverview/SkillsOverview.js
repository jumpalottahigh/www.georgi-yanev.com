import React, { Component } from 'react'
import { Link } from 'gatsby'
import Button from '../../elements/Button/Button.js'

export default class SkillsOverview extends Component {
  render() {
    return (
      <section className="skillsOverview">
        <p>Currently working with:</p>
        <h4>React.js, ES6, PWA, Gatsby</h4>
        <p>Other recent worthy mentions:</p>
        <h4>Vue.js, Netlify, Contentful, Firebase, Gulp, Grunt</h4>
        <div>
          <Link to="/about">
            <Button>Projects and Skills</Button>
          </Link>
        </div>
      </section>
    )
  }
}
