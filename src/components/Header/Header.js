import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from './logo.png'
import github from './github.svg'
import twitter from './twitter.svg'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="brand">
          <NavLink to="/" activeStyle={{ color: 'orangered' }}>
            <img src={logo} alt="Georgi Yanev logo" />
            <h4>@jumpalottahigh</h4>
          </NavLink>
        </nav>
        <nav className="main">
          <NavLink to="/home" activeStyle={{ color: 'orangered' }}>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle={{ color: 'orangered' }}>
            About
          </NavLink>
          <a className="blog" href="https://blog.georgi-yanev.com">
            Blog
          </a>
        </nav>
        <nav className="social">
          <a href="https://github.com/jumpalottahigh">
            <img src={github} alt="GitHub logo" />
          </a>
          <a href="https://twitter.com/jumpalottahigh">
            <img src={twitter} alt="Twitter logo" />
          </a>
        </nav>
      </header>
    )
  }
}

export default Header
