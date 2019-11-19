
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import routes from './routes'

import HairdresserShow from './components/hairdressers/HairdresserShow'
import HairdresserIndex from './components/hairdressers/HairdresserIndex'
import HairdresserEdit from './components/hairdressers/HaidresserEdit'
import HairdresserCreate from './components/hairdressers/HairdresserCreate'

import LoginHairdresser from './components/auth/LoginHairdresser'
import RegisterHairdresser from './components/auth/RegisterHairdresser'
// import SecureRoute from './components/common/SecureRoute'

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route path="/stylist/:id/edit" component={HairdresserEdit} />
        <Route path="/stylist/create" component={HairdresserCreate} />
        <Route path="/stylists/:id" component={HairdresserShow} />
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
