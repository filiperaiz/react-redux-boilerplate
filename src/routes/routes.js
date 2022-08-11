import React, { Suspense } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import ErrorBoundary from 'components/ErrorBoundary'
import ErrorFallback from 'components/ErrorFallback'
import Error404 from 'pages/errorPages/404'
import { browserHistory, listRoutes, PrivateRoute, PublicRoute } from 'routes'

const Routes = () => (
  <Router history={browserHistory}>
    <ErrorBoundary component={ErrorFallback}>
      <Suspense fallback={false}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/public" />
          </Route>

          {Object.keys(listRoutes).map((route) =>
            listRoutes[route].private ? (
              <PrivateRoute
                key={listRoutes[route].path}
                exact
                title={listRoutes[route].title}
                path={listRoutes[route].path}
                component={listRoutes[route].component}
              />
            ) : (
              <PublicRoute
                key={listRoutes[route].path}
                exact
                title={listRoutes[route].title}
                path={listRoutes[route].path}
                component={listRoutes[route].component}
              />
            )
          )}

          <Route path="*" component={Error404} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </Router>
)

export default Routes
