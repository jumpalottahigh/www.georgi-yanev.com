import React from 'react'
import { Link } from 'gatsby'
import './Header.css'
import logo from './logo.png'
import github from './github.svg'
import twitter from './twitter.svg'

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="brand">
      <Link exact to="/" activeStyle={{ color: 'orangered' }}>
        <img src={logo} alt="Georgi Yanev logo" />
        <h4>{siteTitle}</h4>
      </Link>
    </nav>
    <nav className="main">
      <Link exact to="/" activeStyle={{ color: 'orangered' }}>
        Home
      </Link>
      <Link to="/about" activeStyle={{ color: 'orangered' }}>
        About
      </Link>
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

export default Header
