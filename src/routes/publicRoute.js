/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'

import { useTitlePage } from 'hooks'

const PublicRoute = ({ component: Component, title, ...rest }) => {
  useTitlePage(title)

  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default PublicRoute
