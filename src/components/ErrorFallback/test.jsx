import React from 'react'

import { renderWithRedux } from 'utils/tests/renderWithRedux'

import { screen } from '@testing-library/react'

import ErrorFallback from './index'

describe('<ErrorFallbackComponent />', () => {
  it('should render the heading', () => {
    renderWithRedux(<ErrorFallback />)

    expect(
      screen.getByRole('heading', {
        name: /Ops, algo deu errado!/i
      })
    ).toBeInTheDocument()
  })
})
