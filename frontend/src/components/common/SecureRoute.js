import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from '../../lib/auth'

import routes from '../../routes'

const SecureRoute = ({ component: Component, ...rest }) => {
  if (Auth.isAuthenticated()) return <Route { ...rest } component={Component}/>
  Auth.logout()
  return <Redirect to={routes.LOGIN} />
}

export default SecureRoute