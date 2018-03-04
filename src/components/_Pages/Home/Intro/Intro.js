import React, { Component } from 'react'
import './Intro.css'

class Intro extends Component {
  state = {
    image: 'https://avatars2.githubusercontent.com/u/4155121?s=460&v=4',
    bio:
      'Father, Software Engineer, Smart Home Automation Enthusiast, FPV drone pilot',
    position: 'F-Secure',
    location: 'Helsinki, Finland',
    name: 'Georgi Yanev'
  }

  render() {
    const { image, name, position, location, bio } = this.state

    return (
      <section className="intro">
        <img src={image} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>{position}</p>
          <p>{location}</p>
          <p>{bio}</p>
        </div>
      </section>
    )
  }
}

export default Intro
