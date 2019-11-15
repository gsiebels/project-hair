
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

import 'bulma'
import './style.scss'

import LoginHairdresser from './components/auth/LoginHairdresser'
import RegisterHairdresser from './components/auth/RegisterHairdresser'

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginHairdresser} />
        <Route path="/register" component={RegisterHairdresser} />
      </Switch>

    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
