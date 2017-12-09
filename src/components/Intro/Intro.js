import React, { Component } from 'react'
import './Intro.css'

class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <p className="todo">Rework main info section</p>
        <img src={this.props.image} alt={this.props} />
        <h2>{this.props.name}</h2>
        <p>{this.props.company}</p>
        <p>{this.props.location}</p>
        <p>{this.props.bio}</p>
      </section>
    )
  }
}

export default Intro
