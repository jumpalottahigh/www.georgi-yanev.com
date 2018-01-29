import React, { Component } from 'react'
import H2 from '../../../_Elements/H2/H2'

export default class Statements extends Component {
  render() {
    return (
      <section>
        <H2>Statements:</H2>
        <ul>
          <li>I love writing JavaScript and designing systems for the web</li>
          <li>I make things happen on the web</li>
          <li>I fight the performance battle 1 small win at a time</li>
          <li>
            <a href="https://jamstack.org/">JAMstack</a> developer
          </li>
        </ul>
      </section>
    )
  }
}
