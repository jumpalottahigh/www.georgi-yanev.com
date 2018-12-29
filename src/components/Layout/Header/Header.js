import React from 'react'
import { Link } from 'gatsby'
import './Header.css'
import logo from './logo.png'
import github from './github.svg'
import twitter from './twitter.svg'

const activeStyle = {
  transform: 'scale(1.054)',
  borderBottom: '2px solid #fff',
}

const Header = () => (
  <header className="header">
    <nav className="brand">
      <Link exact="true" to="/">
        <img src={logo} alt="Georgi Yanev logo" style={{ height: '40px' }} />
      </Link>
    </nav>
    <nav className="main">
      <Link exact="true" to="/" activeStyle={activeStyle}>
        Home
      </Link>
      <Link to="/about/" activeStyle={activeStyle}>
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
