import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-content: center;
    align-items: center;
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    width: 32.8rem;
  `}
`
