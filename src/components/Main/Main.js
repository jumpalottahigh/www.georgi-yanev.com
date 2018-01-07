import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import NotFound from '../NotFound/NotFound'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Switch>
  </main>
)

export default Main
