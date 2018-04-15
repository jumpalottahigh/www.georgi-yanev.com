import React, { Component } from 'react'
import './Intro.css'

class Intro extends Component {
  state = {
    image: 'https://avatars2.githubusercontent.com/u/4155121?s=460&v=4',
    bio: [
      '🍼 Father',
      '💻 Software Engineer',
      '🏡 Smart Home Automation Enthusiast',
      '🚁 FPV drone pilot'
    ],
    position: 'Web Developer @ F-Secure',
    location: 'Helsinki, Finland',
    name: 'Georgi Yanev'
  }

  render() {
    const { image, name, position, location, bio } = this.state

    return (
      <section className="intro">
        <img src={image} alt={name} />
        <div className="intro__inner">
          <h2>{name}</h2>
          <h4>{position}</h4>
          <h5>{location}</h5>
          <ul>{bio.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
      </section>
    )
  }
}

export default Intro
