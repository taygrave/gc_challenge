// @flow
import React, { Component } from 'react'
import { Switch, NavLink, Route } from 'react-router-dom'

import HomePage from './home-page'
import NotFoundPage from './not-found-page'

import type { Element } from '../types'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
type Props = {
  children?: Element
}

class App extends Component<Props, {}> {
  render () {
    return (
      <div>
        <div>
          <NavLink exact to='/'>Home</NavLink>
        </div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

export default App
