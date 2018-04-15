import React, { Component } from 'react'
import H2 from '../../../_Elements/H2/H2'

export default class Statements extends Component {
  render() {
    return (
      <section style={{ backgroundColor: 'beige' }}>
        <H2>Statements:</H2>
        <div style={{ justifySelf: 'center' }}>
          <ul>
            <li>I love writing JavaScript and designing systems for the web</li>
            <li>I am very excited about Web Components</li>
            <li>I like to make things work on the web</li>
            <li>I fight the performance battle one small win at a time</li>
            <li>
              <a href="https://jamstack.org/">JAMstack</a> developer
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
