import React, { Component } from 'react'
import './GithubActivity.css'

class GithubActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      githubPublicActivity: []
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
      githubPublicActivity: { ...publicActivityJSON }
    })
  }

  render() {
    return (
      <section className="github-activity">
        <p>// TODO: implement lazy loading for this</p>
        <button onClick={this.handleGithub}>Latest Github Activity</button>
        {/* TODO: Output data here */}
        {/* <ul>
          {this.state.githubPublicActivity.map(item => (
            <li key={item.id}>{item.type}</li>
          ))}
        </ul> */}
      </section>
    )
  }
}

export default GithubActivity
