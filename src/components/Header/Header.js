import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './logo.png'
import github from './github.svg'
import twitter from './twitter.svg'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="brand">
          <a href="/">
            <img src={logo} alt="Georgi Yanev logo" />
            <h4>@jumpalottahigh</h4>
          </a>
        </nav>
        <nav className="main">
          <Link to="/">Home</Link>
          {/* /about (goes to old page full length) */}
          <Link to="/about">About</Link>
          <a href="/blog">Blog</a>
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
