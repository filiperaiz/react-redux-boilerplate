import React from 'react'

import { renderWithReduxRouter } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import PrivatePage from './index'

describe('<PrivatePage />', () => {
  it('should render the heading', () => {
    renderWithReduxRouter(<PrivatePage />)

    expect(
      screen.getByRole('heading', { name: /PrivatePage/i })
    ).toBeInTheDocument()
  })
})
