import React from 'react'

import { listRoutes } from 'routes'
import { isAuthenticated } from 'services/auth'

import * as S from './styles'

const Error404 = () => {
  const handleSwitch = () => {
    if (isAuthenticated()) {
      listRoutes.private.redirect()
    } else {
      listRoutes.public.redirect()
    }
  }

  return (
    <S.Wrapper>
      <h1>
        Parece que a página que você tentou acessar não existe. Mas, você pode
        voltar para a nossa página principal e prosseguir a partir dela.
      </h1>

      <button onClick={handleSwitch}>ok, ir para a página principal</button>
    </S.Wrapper>
  )
}

export default Error404
