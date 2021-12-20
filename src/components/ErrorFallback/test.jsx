import React from 'react'

import { renderWithReduxRouter } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import ErrorFallback from './index'

describe('<ErrorFallbackComponent />', () => {
  it('should render the heading', () => {
    renderWithReduxRouter(<ErrorFallback />)

    expect(
      screen.getByRole('heading', {
        name: /Ops, algo deu errado!/i
      })
    ).toBeInTheDocument()
  })
})
