import React, { Component } from 'react'
import H2 from '../../elements/H2/H2.js'

export default class Statements extends Component {
  render() {
    return (
      <section style={{ backgroundColor: '#dedede' }}>
        <H2>Statements:</H2>
        <div style={{ justifySelf: 'center' }}>
          <h4>I love making things work on the web, usually by:</h4>
          <ul>
            <li>
              Writing JavaScript, designing and connecting systems and services
            </li>
            <li>Focusing on performance as I go and not as an after thought</li>
          </ul>
          <h4>Am looking forward to and excited about the future of:</h4>
          <ul>
            <li>Web Components</li>
            <li>
              <a href="https://jamstack.org/">JAMstack</a>
            </li>
            <li>AR</li>
          </ul>
        </div>
      </section>
    )
  }
}
