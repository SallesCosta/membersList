import styled, { createGlobalStyle } from 'styled-components'

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  transition: 0.3s;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`

export const ErrorButton = styled.button`
  border-radius: 8px;
  background: tomato;
  color: white;
  cursor: pointer;
  padding: 1rem;
  transition: 0.3s;
  &: hover {
    transform: scale(1.05);
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;
  width: 250px;
`

export const Component = styled.div`
  background-color: transparent;
  jsmFont('var(--text-body-medium)');

  width: var(--spacing-large);
`
