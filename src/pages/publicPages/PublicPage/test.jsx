import React from 'react'

import { Types as ExamplesTypes } from 'redux/ducks/example'
import { renderWithReduxRouter } from 'utils/tests/helpers'

import { fireEvent, screen } from '@testing-library/react'

import PublicPage from '.'

describe('<PublicPage />', () => {
  it('should render Component', () => {
    renderWithReduxRouter(<PublicPage />)
  })

  it('should render the heading', () => {
    renderWithReduxRouter(<PublicPage />)

    expect(
      screen.getByRole('heading', { name: /React Boilerplate/i })
    ).toBeInTheDocument()
  })

  it('should render img', () => {
    renderWithReduxRouter(<PublicPage />)

    expect(
      screen.getByRole('img', {
        name: /Um desenvolvedor de frente para um notebook./i
      })
    ).toBeInTheDocument()
  })

  it('should submit on click from button', () => {
    const { action } = renderWithReduxRouter(<PublicPage />)

    const btn = screen.getByRole('button', { name: /submit/i })

    fireEvent.click(btn)

    expect(action).toBeCalled()
    expect(action.getMockName()).toBe(ExamplesTypes.EXAMPLE_TYPE)
    expect(action.getMockValue()).toEqual({
      name: 'name test'
    })
  })
})
