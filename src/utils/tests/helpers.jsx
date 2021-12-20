/* eslint-disable react/prop-types */
import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import themeDefault from 'assets/styles/theme'
import { createMemoryHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import reducer from 'redux/ducks'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

let initialState = {}

export const renderWithReduxRouter = (children, { reduxState } = {}) => {
  const action = jest.fn()

  const logActions = () => {
    return (next) => (act) => {
      // insert data mocks in function
      action.mockReturnValueOnce(act).mockName(act.type)

      // call function
      action(act.type)

      // Call the next dispatch method in the middleware chain.
      return next(act)
    }
  }

  const store = createStore(
    reducer,
    reduxState || initialState,
    applyMiddleware(logActions)
  )
  const history = createMemoryHistory()

  const getMockAllNames = () => action.mock.results.map((obj) => obj.value.type)

  const getMockAllValues = () =>
    action.mock.results.map((obj) => obj.value.payload)

  const getMockValue = () => action.mock.results.slice(-1)[0]?.value.payload

  return {
    action: { ...action, getMockAllNames, getMockAllValues, getMockValue },

    ...render(
      <Provider store={store}>
        <ThemeProvider theme={themeDefault}>
          <Router history={history}>{children}</Router>
        </ThemeProvider>
      </Provider>
    )
  }
}
