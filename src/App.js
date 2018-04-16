import React, { Component } from 'react'
import './App.css'

// UI Components
import Header from './components/Header/Header'
import Main from './components/_Pages/Main/Main'
import Footer from './components/Footer/Footer'

export class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
