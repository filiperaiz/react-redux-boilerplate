import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PropTypes from 'prop-types'
import { Actions as GenericsExample } from 'redux/ducks/example'
import { Button } from 'roots-design-system'

import ImgHero from './hero.png'
import * as S from './styles'

const MainPage = ({ title }) => {
  const dispatch = useDispatch()

  const { name } = useSelector((state) => state.example)

  const handleSubmit = () => {
    dispatch(
      GenericsExample.exampleType({
        name: 'name test'
      })
    )
  }

  return (
    <S.Wrapper>
      <S.Main>
        <h1>{title}</h1>
        <h3>{name}</h3>

        <S.Illustration
          src={ImgHero}
          alt="Um desenvolvedor de frente para um notebook."
        />

        <Button onClick={handleSubmit}>Submit Redux</Button>

        <Button
          as="a"
          variant="secondary-outline"
          target="_blank"
          href="https://github.com/filiperaiz/react-redux-boilerplate"
        >
          Open Github Project
        </Button>

        <Button
          as="a"
          variant="secondary-outline"
          target="_blank"
          href="https://github.dev/filiperaiz/react-redux-boilerplate"
        >
          Open Github VSCODE online
        </Button>
      </S.Main>
    </S.Wrapper>
  )
}

MainPage.propTypes = {
  title: PropTypes.string
}

MainPage.defaultProps = {
  title: 'React Boilerplate'
}

export default MainPage
