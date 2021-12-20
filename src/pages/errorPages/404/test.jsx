import React from 'react'

import { renderWithReduxRouter } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import Error404 from './index'

describe('<Error404Page />', () => {
  it('should render the heading', () => {
    renderWithReduxRouter(<Error404 />)

    expect(
      screen.getByRole('heading', {
        name: /Parece que a página que você tentou acessar não existe. Mas, você pode voltar para a nossa página principal e prosseguir a partir dela./i
      })
    ).toBeInTheDocument()
  })
})
