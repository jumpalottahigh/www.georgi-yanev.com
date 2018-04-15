import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import NotFound from '../NotFound/NotFound'
import Portfolio from '../About/Portfolio/Portfolio'
import SkillTags from '../About/SkillTags/SkillTags'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/skills" component={SkillTags} />
      <Route path="*" component={NotFound} />
    </Switch>
  </main>
)

export default Main
