import React, { Component } from 'react'
import GithubEvent from './GithubEvent'
import './GithubActivity.css'

class GithubActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      githubPublicActivity: ['']
    }
    this.handleGithub = this.handleGithub.bind(this)
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve)
    })
  }

  async handleGithub() {
    // fetch basic user info from Github API
    let userPublicActivityUrl =
      'https://api.github.com/users/jumpalottahigh/events/public'
    const publicActivityResponse = await fetch(userPublicActivityUrl)
    const publicActivityJSON = await publicActivityResponse.json()
    console.log(publicActivityJSON)
    await this.setStateAsync({
      githubPublicActivity: publicActivityJSON
    })
  }

  render() {
    return (
      <section className="github-activity">
        <p className="todo">
          <span className="todo-description">
            - Do with lazy loading in production<br />
            - Heavy refactor opportunity<br />
            - Payload is different on different event types
          </span>
        </p>
        <p />
        <button onClick={this.handleGithub}>Latest Github Activity</button>

        <GithubEvent data={this.state.githubPublicActivity[0]} />
        <GithubEvent data={this.state.githubPublicActivity[1]} />
        <GithubEvent data={this.state.githubPublicActivity[2]} />

        <p>Add load more button</p>
      </section>
    )
  }
}

export default GithubActivity
