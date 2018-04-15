import React, { Component } from 'react'
import ReactGA from 'react-ga'

export default class NotFound extends Component {
  componentDidMount = () => {
    ReactGA.initialize('UA-43588334-2')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render() {
    return <div>404: not found</div>
  }
}
