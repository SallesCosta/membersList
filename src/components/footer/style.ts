/* eslint-disable camelcase */
import styled, { css } from 'styled-components'

export const Footer__internal = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.grey3};
    color: ${theme.colors.white};
    height: 296px;
    margin-top: 6rem;
    padding: 32px;
    width: 100%;

    @media (max-width: 1000px) {
      margin-top: 3rem;
    }
  `}
`

export const Footer__container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 1136px;

  @media (max-width: 1215px) {
    width: 848px;
  }

  @media (max-width: 1000px) {
    width: 470px;
  }
`

export const Footer__logo = styled.img`
  align-items: center;
  display: block;
  height: 48px;
  width: 48.35px;
`

export const Footer__text = styled.h1`
  display: flex;
  font-size: 1.5rem;
  margin: 0;
`

const Footer__icons = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
    border-radius: 20px;
    height: 40px;
    margin: 10px;
    margin-top: 16px;
    width: 40px;
  `}
`

export const Footer__icons__fb = styled(Footer__icons)`
  svg {
    margin-left: 14px;
    margin-top: 10px;
  }
`

export const Footer__icons__in = styled(Footer__icons)`
  svg {
    margin-left: 8px;
    margin-top: 8px;
  }
`

export const Footer__icons__lk = styled(Footer__icons)`
  svg {
    margin-left: 10px;
    margin-top: 9px;
  }
`

export const Footer__wrap = styled.div`
  flex-direction: colums;
  margin-left: 8px;
`

export const Footer__ajuste16 = styled.div`
  margin: 24px;
`

export const Footer__Hstack = styled.div`
  display: flex;
  flex-direction: row;
`
