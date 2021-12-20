import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`

export const Main = styled.main`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.secondary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 32rem;
    text-align: center;
    width: 100%;
  `}
`

export const Logo = styled.img`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    width: 8rem;
  `}
`

export const Illustration = styled.img`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    width: min(25rem, 100%);
  `}
`
