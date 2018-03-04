import React, { Component } from 'react'
// import { HashLink as Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Button from '../../../_Elements/Button/Button'
import './SkillsOverview.css'

export default class SkillsOverview extends Component {
  render() {
    return (
      <section className="skillsOverview">
        <p className="todo">
          <span className="todo-description">- Design &amp; Copy</span>
        </p>
        <p>Currently mostly using:</p>
        <h4>React.js, Vue.js</h4>
        <p>Other recently used:</p>
        <h4>Handlebars, Gulp, Grunt</h4>
        <Link smooth to="/about#skills">
          <Button>More about my skills</Button>
        </Link>
      </section>
    )
  }
}
