import React, { Component, Fragment } from 'react'
import { Fade } from 'react-reveal'
import GithubEvent from './GithubEvent'
import './GithubActivity.css'
import H2 from '../../elements/H2/H2.js'

class GithubActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      githubPublicActivity: [''],
      showAll: false,
    }
    this.fetchGithub = this.fetchGithub.bind(this)
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve)
    })
  }

  async fetchGithub() {
    // fetch basic user info from Github API
    let userPublicActivityUrl =
      'https://api.github.com/users/jumpalottahigh/events/public'
    const publicActivityResponse = await fetch(userPublicActivityUrl)
    const publicActivityJSON = await publicActivityResponse.json()
    await this.setStateAsync({
      githubPublicActivity: publicActivityJSON,
    })
  }

  displayMoreItems = e => {
    e.preventDefault()
    // if no data has been fetched yet stop
    if (this.state.githubPublicActivity.length <= 1) return

    // render all 30 items, may consider a modal for the UI?
    this.setState({
      showAll: true,
    })
  }

  componentDidMount() {
    // On subsequent visits just fetch the data
    if (document.readyState === 'complete') {
      this.fetchGithub()
      return
    }

    // On first load wait for page to finish loading before fetching data
    window.addEventListener('load', () => {
      this.fetchGithub()
    })
  }

  render() {
    return (
      <section className="github-activity">
        <H2 style={{ gridColumn: '1/-1' }}>Latest GitHub Activity:</H2>
        {this.state.showAll === false ? (
          <Fragment>
            <GithubEvent data={this.state.githubPublicActivity[0]} />
            <GithubEvent data={this.state.githubPublicActivity[1]} />
            <GithubEvent data={this.state.githubPublicActivity[2]} />
            <a
              href="#more-activity"
              style={{
                gridColumn: '1/-1',
                textAlign: 'center',
                textDecoration: 'underline',
              }}
              onClick={this.displayMoreItems}
            >
              Show more activity
            </a>
          </Fragment>
        ) : (
          this.state.githubPublicActivity.map(item => (
            <Fade key={item.id}>
              <GithubEvent data={item} />
            </Fade>
          ))
        )}
      </section>
    )
  }
}

export default GithubActivity
