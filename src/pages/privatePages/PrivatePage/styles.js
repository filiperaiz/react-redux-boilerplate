import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.offwhite};
    color: ${theme.colors.black};
  `}
`
