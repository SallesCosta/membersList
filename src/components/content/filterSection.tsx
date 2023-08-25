import { useState } from 'react'
import * as S from './styles'
import * as T from '@/styles/text'
import { useGlobalContext } from '@/shared/globalContext'

export const FilterSection = () => {
  const { lista, handleChange, novaLista } = useGlobalContext()
  const [show, setShow] = useState(false)

  return (
    <>
      <S.CardFilter show={show.toString()}>
        <S.CardFilterBox show={show.toString()}>
          <T.Text20>Por Estado</T.Text20>
          {lista.map((estado) => {
            return (
              <S.CardFilterLine key={estado.id}>
                <S.CardFilterCheckbox
                  type='checkbox'
                  checked={novaLista.includes(estado.id)}
                  id={estado.name}
                  name={estado.name}
                  onChange={() => handleChange(estado.id)}
                />
                <T.Text16>{estado.name}</T.Text16>
              </S.CardFilterLine>
            )
          })}
        </S.CardFilterBox>
        <S.CardSeeMoreButton onClick={() => setShow(!show)}>
          <T.Text16underline>
            {show ? 'See less' : 'See more'}
          </T.Text16underline>
        </S.CardSeeMoreButton>
      </S.CardFilter>
    </>
  )
}
