import React, { Component, Fragment } from 'react'

// UI Components
import Intro from '../../Intro/Intro'
import Statements from '../../Statements/Statements'
import GithubActivity from '../../GithubActivity/GithubActivity'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      githubUserData: {
        avatar_url:
          'https://avatars2.githubusercontent.com/u/4155121?s=460&v=4',
        bio:
          'Father, Software Engineer, Smart Home Automation Enthusiast, FPV drone pilot',
        company: 'F-Secure',
        location: 'Helsinki, Finland',
        name: 'Georgi Yanev'
      }
    }
  }

  render() {
    return (
      <Fragment>
        <Intro
          image={this.state.githubUserData.avatar_url}
          bio={this.state.githubUserData.bio}
          company={this.state.githubUserData.company}
          location={this.state.githubUserData.location}
          name={this.state.githubUserData.name}
        />
        <Statements />
        <GithubActivity />
        <section>
          <p className="todo">
            <span className="todo-description">
              - Sort these in their correct place
            </span>
          </p>
          <br />
          <br />
          <h1>Ideas</h1>
          <p>clean with expandable sections / additional info</p>
          <p>involvement with OSS and interesting projects</p>
        </section>
      </Fragment>
    )
  }
}

export default Home
