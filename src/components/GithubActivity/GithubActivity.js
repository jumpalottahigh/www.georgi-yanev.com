import React, { Component } from 'react'
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
    console.log(1)
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
          <p className="todo-description">
            - Do with lazy loading in production<br />
            - Heavy refactor opportunity<br />
            - Payload is different on different event types
          </p>
        </p>
        <p />
        <button onClick={this.handleGithub}>Latest Github Activity</button>

        {this.state.githubPublicActivity[0] ? (
          <p>
            <span>ID: {this.state.githubPublicActivity[0].id}</span>
            <br />
            <span>Date: {this.state.githubPublicActivity[0].created_at}</span>
            <br />
            <span>
              Repo name: {this.state.githubPublicActivity[0].repo.name}
            </span>
            <br />
            {/* Based on the type of the event the payload differs */}
            {this.state.githubPublicActivity[0].type === 'PushEvent' ? (
              <span>
                <span>
                  Event type: {this.state.githubPublicActivity[0].type}
                </span>
                <br />
                <span>
                  Commit author:{' '}
                  {
                    this.state.githubPublicActivity[0].payload.commits[0].author
                      .name
                  }
                </span>
                <br />
                <span>
                  Commit message:{' '}
                  {
                    this.state.githubPublicActivity[0].payload.commits[0]
                      .message
                  }
                </span>
              </span>
            ) : (
              <span />
            )}
          </p>
        ) : (
          <p>
            <span>No data fetched yet.</span>
          </p>
        )}
      </section>
    )
  }
}

export default GithubActivity
