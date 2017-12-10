import React, { Component } from 'react'
import './App.css'
import fire from './fire'

// UI Components
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import GithubActivity from './components/GithubActivity/GithubActivity'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      githubUserData: {
        avatar_url:
          'https://avatars2.githubusercontent.com/u/4155121?s=460&v=4',
        bio:
          'Father, Software Engineer, Smart Home Automation Enthusiast, FPV drone pilot',
        company: 'F-Secure',
        location: 'Helsinki, Finland',
        name: 'Georgi Yanev'
      },
      githubPublicActivity: {}
    } // set up react state
  }

  state = {}

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve)
    })
  }

  async componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire
      .database()
      .ref('skills')
      .orderByKey()
      .limitToLast(100)
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key }
      this.setState({ messages: [message].concat(this.state.messages) })
    })

    // fetch basic user info from Github API
    // let basicInfoUrl = 'https://api.github.com/users/jumpalottahigh?activity'
    // let userPublicActivityUrl =
    //   'https://api.github.com/users/jumpalottahigh/events/public'
    // const basicInfoResponse = await fetch(basicInfoUrl)
    // const basicInfoJSON = await basicInfoResponse.json()
    // const publicActivityResponse = await fetch(userPublicActivityUrl)
    // const publicActivityJSON = await publicActivityResponse.json()
    // await this.setStateAsync({
    //   githubUserData: { ...basicInfoJSON },
    //   githubPublicActivity: { ...publicActivityJSON }
    // })
  }

  addMessage(e) {
    e.preventDefault() // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire
      .database()
      .ref('skills')
      .push(this.inputEl.value)
    this.inputEl.value = '' // <- clear the input
  }

  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <Intro
            image={this.state.githubUserData.avatar_url}
            bio={this.state.githubUserData.bio}
            company={this.state.githubUserData.company}
            location={this.state.githubUserData.location}
            name={this.state.githubUserData.name}
          />
          <GithubActivity />
          <section>
            <h1>Statements:</h1>
            <ul>
              <li>
                I love writing JavaScript and designing systems for the web
              </li>
              <li>I make things happen on the web</li>
              <li>I fight the performance battle 1 small win at a time</li>
              <li>
                <a href="https://jamstack.org/">JAMstack</a> developer
              </li>
            </ul>
          </section>
          <section>
            <p className="todo">
              <p className="todo-description">
                - Sort these in their correct place
              </p>
            </p>
            <br />
            <br />
            <h1>Ideas</h1>
            <p>clean with expandable sections / additional info</p>
            <p>involvement with OSS and interesting projects</p>
          </section>
          <section>
            <h2>Here are some skill tags (pulled from Firebase)</h2>
            {/* <ul>
            {this.state.messages.map(message, index => (
              <li key={index}>{message}</li>
            ))}
          </ul> */}
          </section>

          <section>
            <form onSubmit={this.addMessage.bind(this)}>
              <input type="text" ref={el => (this.inputEl = el)} />
              <input type="submit" />
              <ul>
                {/* Render the list of messages */
                this.state.messages.map(message => (
                  <li key={message.id}>{message.text}</li>
                ))}
              </ul>
            </form>
          </section>
          <footer className="footer">My footer</footer>
        </div>
      </div>
    )
  }
}

export default App
