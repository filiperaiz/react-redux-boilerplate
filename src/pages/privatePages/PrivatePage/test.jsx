import React from 'react'

import { renderWithRedux } from 'utils/tests/renderWithRedux'

import { screen } from '@testing-library/react'

import PrivatePage from './index'

describe('<PrivatePage />', () => {
  it('should render the heading', () => {
    renderWithRedux(<PrivatePage />)

    expect(
      screen.getByRole('heading', { name: /PrivatePage/i })
    ).toBeInTheDocument()
  })
})
