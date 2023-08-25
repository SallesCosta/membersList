import styled, { css } from 'styled-components'

export const ContentInternal = styled.div`
  height: auto;
  margin: auto;
  width: 1136px;

  @media (max-width: 1215px) {
    width: 848px;
  }

  @media (max-width: 1000px) {
    width: 470px;
  }
`

export const ContentHeader = styled.div`
  height: 128px;
  margin-top: 1.5rem;

  @media (max-width: 1000px) {
    height: 90px;
    margin-top: 0.5rem;
  }
`

export const ContentInternalGrid = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(272px, 3fr));
  grid-gap: 1rem;
  width: auto;

  @media (max-width: 1000px) {
    min-height: auto;
  }
`

export const ContentEmptylist = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grey5};
    min-height: 848px;
    width: 100%;
  `}
`

const Card = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grey2};
    border-radius: 4px;
    color: ${theme.colors.black};
    display: block;
    height: auto;
  `}
`

type CardFilterProps = {
  show: string;
}

export const CardButton = styled.button`
  background: transparent;
  height: auto;
`

export const CardUser = styled(Card)`
  ${({ theme }) => css`
    height: 310px;
    justify-content: space-between;
    padding: 35px;
    text-align: center;
    transition: 0.25s;
    width: 272px;
    &:hover {
      background-image: linear-gradient(
        to bottom left,
        ${theme.colors.blue},
        ${theme.colors.grey2},
        ${theme.colors.white}
      );
      border: 1px solid ${theme.colors.blue};
      transform: scale(1.01);
    }
    @media (max-width: 1000px) {
      display: flex;
      height: 120px;
      justify-content: space-around;
      padding: 10px;
      width: 470px;
    }
  `}
`

export const CardUserAjuste = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const CardUserImg = styled.img`
  border-radius: 100%;
  height: 97px;
  margin-bottom: 1rem;
  width: 97px;
`

export const CardUserApagar = styled.div`
  display: block;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const CardUserRua = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.75rem;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const CardHead = styled(Card)`
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin-bottom: 1rem;
  min-width: 848px;
  padding: 1rem;

  @media (max-width: 1215px) {
    min-width: 560px;
  }

  @media (max-width: 1000px) {
    min-width: 100%;
  }
`

export const CardFilter = styled(Card) <CardFilterProps>`
  flex-direction: column;
  height: ${(props) => (props.show === 'true' ? '900px' : '474px')};
  margin-right: 1rem;
  margin-bottom: 1.2rem;
  min-width: 272px;
  padding: 24px 27px;
  transition: 0.4s;
  width: 272px;

  @media (max-width: 1000px) {
    height: ${(props) => (props.show ? '850px' : '75px')};
    margin: auto;
    margin-bottom: 1rem;
    padding: 10px 27px;
    width: 100%;
  }
`

export const CardFilterBox = styled.div<CardFilterProps>`
  height: ${(props) => (props.show === 'true' ? 'auto' : '170px')};
  overflow-y: hidden;

  @media (max-width: 1000px) {
    height: ${(props) => (props.show ? '800px' : '25px')};
  }
`

export const CardFilterLine = styled.div`
  display: flex;
  flex-direction: row;
`

export const CardFilterCheckbox = styled.input`
  margin-right: 8px;
  margin-top: 7px;
`

export const CustomerContainer = styled(Card)`
  ${({ theme }) => css`
    color: ${theme.colors.grey5};
    height: 474px;
    margin: auto;
    padding: 1rem;
    min-width: 430px;
  `}
`

export const CustomerImg = styled.img`
  display: block;
  height: auto;
  margin: auto;
  margin-bottom: 2rem;
`

export const CustomerSection = styled.section`
  ${({ theme }) => css`
    align-items: baseline;
    border-bottom: 1px dashed ${theme.colors.grey5};
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
    width: 100%;
  `}
`

export const CustomerButton = styled.a`
  color: tomato;
  cursor: pointer;
`

export const CustomerAjuste = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const CardSeeMoreButton = styled.button`
  background: transparent;
`
