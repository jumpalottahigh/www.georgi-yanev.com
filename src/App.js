import React, { Component } from 'react'
import './App.css'
import fire from './fire'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] } // set up react state
  }

  componentWillMount() {
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
      <div className="wrapper">
        <header className="header">My header</header>
        <section className="content">
          <h1>2 column, header and footer</h1>
          <p>
            1. Wire up Firebase 2. Add Github and Twitter feeds in a non
            intrusive manner 3. Includes skills somehow 4. Copy 5. Buttons with
            click tracking to expand sections?
          </p>
        </section>
        <section>
          <h2>Here are some skill tags</h2>
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
    )
  }
}

export default App
