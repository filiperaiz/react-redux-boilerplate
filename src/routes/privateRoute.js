/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useTitlePage } from 'hooks'
import { isAuthenticated, getDevEnv } from 'services/auth'

const PrivateRoute = ({ component: Component, title, ...rest }) => {
  useTitlePage(title)

  if (getDevEnv()) {
    return <Route {...rest} render={(props) => <Component {...props} />} />
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

export default PrivateRoute
