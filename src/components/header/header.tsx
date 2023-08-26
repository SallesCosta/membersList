import { useGlobalContext } from '@/shared/globalContext'
import { ChangeEvent, FormEvent } from 'react'
import * as S from './style'
import { SearchIcon } from '@/assets/searchIcon'
import { LucideBoxes } from '@/assets/LucideBoxes'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const {
    data,
    setData,
    handleChange,
    setUserData,
    selected,
    searched,
    setSelected,
    setSearched,
    setFiltered,
    getData,
    setNovaLista,
  } = useGlobalContext()

  const clear = () => {
    setNovaLista([])
    setUserData([])
    setFiltered([])
    setSelected([])
    setSearched([])
    setData('')
    getData()
    navigate('/')
  }

  const onChange = (i: string) => {
    setData(i)
    setNovaLista([])
    setUserData([])
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const first = searched.filter((user) => {
      return user.name.first === data
    })

    const last = searched.filter((user) => {
      return user.name.last === data
    })

    first.length !== 0 && selected.push(...first)
    last.length !== 0 && selected.push(...last)

    first.length !== 0 && setUserData(first)
    last.length !== 0 && setUserData(last)

    selected.map((u) => handleChange(u.location.state))
    setUserData(selected)
    setData('')
  }

  return (
    <S.HeaderInternal>
      <S.HeaderContainer>
        <LucideBoxes width='48px' height='48px' strokeWidth='1' />
        <form onSubmit={handleSubmit}>
          <S.HeaderInputLabel>
            <SearchIcon />
            <S.HeaderInput
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
              value={data}
              placeholder='Search...'
              name='name'
            />
          </S.HeaderInputLabel>
        </form>
        <S.HeaderButtonClear onClick={clear}>Clear</S.HeaderButtonClear>
      </S.HeaderContainer>
    </S.HeaderInternal>
  )
}
