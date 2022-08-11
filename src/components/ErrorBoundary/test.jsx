import React from 'react'

import { renderWithRedux } from 'utils/tests/renderWithRedux'

import { screen } from '@testing-library/react'

import ErrorBoundary from './index'

describe('<ErrorBoundaryComponent />', () => {
  it('should render the heading', () => {
    renderWithRedux(
      <ErrorBoundary>
        <h1>Ops, algo deu errado!</h1>
      </ErrorBoundary>
    )

    expect(
      screen.getByRole('heading', {
        name: /Ops, algo deu errado!/i
      })
    ).toBeInTheDocument()
  })
})
