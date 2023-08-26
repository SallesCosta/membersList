import styled, { css } from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
`

export const PaginationInternal = styled.div`
  display: flex;
  justify-content: center;
  padding-inline-start: 0;
`

type PaginationLinkProps = {
  show: boolean
  onClick: null | (() => void)
}

export const PaginationLink = styled.button<PaginationLinkProps>`
  ${({ theme, show }) => css`
    align-items: center;
    background: ${show ? `${theme.colors.grey5}` : `${theme.colors.white}`};
    border-radius: 100%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
    cursor: poiter;
    display: flex;
    height: 50px;
    justify-content: center;
    margin: 2px;
    min-width: 50px;
    transition: 0.3s;
    width: 50px;

    &:hover {
      transform: scale(1.05);
    }

    span {
      background: none;
      border: none;
      color: ${show ? `${theme.colors.white}` : `${theme.colors.grey5}`};
      outline: inherit;
      padding: 0;
      text-decoration: none;
    }
  `}
`

type PaginationChangePageProps = {
  disabled: boolean
}

export const PaginationChangePage = styled.button<PaginationChangePageProps>`
  ${({ theme, disabled }) => css`
    align-items: center;
    background: ${disabled ? `${theme.colors.grey2}` : `${theme.colors.grey4}`};
    border: none;
    border-radius: 100%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
    cursor: poiter;
    display: flex;
    height: 50px;
    justify-content: center;
    margin: 2px;
    min-width: 50px;
    transition: 0.3s;
    width: 50px;

    &:hover {
      transform: scale(1.05);
    }

    svg {
      transform: scale(1.25);
    }
  `}
`

export const PaginationSpreadDots = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.grey5};
  `}
`
