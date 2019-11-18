
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import routes from './routes'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

import 'bulma'
import './style.scss'

import LoginHairdresser from './components/auth/LoginHairdresser'
import RegisterHairdresser from './components/auth/RegisterHairdresser'
import HairdresserIndex from './components/hairdressers/HairdresserIndex'

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route path={routes.STYLISTS} component={HairdresserIndex} />
        <Route path={routes.LOGIN} component={LoginHairdresser} />
        <Route path={routes.REGISTER} component={RegisterHairdresser} />
      </Switch>

    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
