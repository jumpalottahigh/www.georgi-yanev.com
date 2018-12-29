import React, { Component } from 'react'
import github from '../Header/github.svg'
import twitter from '../Header/twitter.svg'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <nav className="social">
          <a href="https://github.com/jumpalottahigh">
            <img src={github} alt="GitHub logo" />
          </a>
          <a href="https://twitter.com/jumpalottahigh">
            <img src={twitter} alt="Twitter logo" />
          </a>
        </nav>
        <h5>
          Copyright &copy; 2013-2018 Georgi Yanev.
          <br />
          Dedicated to Sofi and little Anton{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </h5>
      </footer>
    )
  }
}
