import styled, { css } from 'styled-components'

export const HeaderInternal = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.grey1};
    height: 96px;
    width: 100%;
  `}
`

export const HeaderContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: inherit;
  margin: auto;
  width: 1136px;

  @media (max-width: 1215px) {
    width: 848px;
  }

  @media (max-width: 1000px) {
    justify-content: space-around;
    width: 470px;

    svg {
      display: none;
    }
  }
`

export const HeaderInputLabel = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.grey6};
    border-radius: 24px;
    color: ${theme.colors.grey5};
    display: flex;
    height: 48px;
    margin-left: 140px;
    margin-right: 40px;
    padding: 10px 20px;
    width: 464px;

    @media (max-width: 1000px) {
      margin: 0;
      width: 200px;
    }
  `}
`

export const HeaderInput = styled.input`
    border: 0 none;
    margin-left: 20px;
    max-width: inherit;
    outline: 0;
    width: 400px;

    @media (max-width: 1000px) {
      width: auto;
      margin-left: 0;
    }
`

const jsmFont = (dsVar: string) => {
  return `
      // font: ${dsVar};
      // letter-spacing: ${dsVar}-letter;
      // line-height: ${dsVar};

      border: 1px solid ${dsVar};
      color: ${dsVar};
    `
}

export const HeaderButtonClear = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.blue};
    border-radius: 24px;
    color: ${theme.colors.blue};
    display: flex;
    height: 48px;
    padding: 10px 20px;
    transition: 0.3s;

    &:hover {
      ${jsmFont(theme.colors.orange2)};
      background: ${theme.colors.orange1};
      transform: scale(1.05);
    }
  `}
`

export const HeaderLogo = styled.img`
  align-items: center;
  display: block;
`
