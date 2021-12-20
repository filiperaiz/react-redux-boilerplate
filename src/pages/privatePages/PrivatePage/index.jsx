import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const PrivatePage = ({ title, ...props }) => (
  <S.Wrapper {...props}>
    <h1>{title}</h1>
  </S.Wrapper>
)

PrivatePage.propTypes = {
  title: PropTypes.string
}

PrivatePage.defaultProps = {
  title: 'PrivatePage'
}

export default PrivatePage
