import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={this.props.image} alt={this.props} />
        <h2>{this.props.name}</h2>
        <p>{this.props.company}</p>
        <p>{this.props.location}</p>
        <p>{this.props.bio}</p>
      </header>
    )
  }
}

export default Header
