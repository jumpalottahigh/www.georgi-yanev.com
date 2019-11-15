import React from 'react'
import { Link } from 'gatsby'
import Button from '../../elements/Button/Button.js'

const SkillsOverview = () => (
  <section className="skillsOverview">
    <p>Currently working with:</p>
    <h4>React.js, Electron, Redux, TypeScript, Node.js,</h4>
    <h4>JavaScript, React.js, ES6, PWAs, Gatsby,</h4>
    <h4>Netlify, Git, Wercker, JAMstack</h4>
    <p>Other recent worthy mentions:</p>
    <h4>Contentful, Firebase, Gulp, Grunt</h4>
    <div>
      <Link to="/about/">
        <Button>Projects and Skills</Button>
      </Link>
    </div>
  </section>
)

export default SkillsOverview
