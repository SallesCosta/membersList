import { Pagination } from '../pagination/pagination'
import { Suspense, useEffect, useState } from 'react'
import { useGlobalContext, userProps } from '@/shared/globalContext'
import { FilterSection } from './filterSection'
import { ErrorBoundary } from '@/shared/errorBoundary'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { CustomerPage } from './customerPage'
import * as S from './styles'
import * as U from '@/styles/styles'
import * as T from '@/styles/text'
import { SetaIcon } from '@/assets/setaIcon'

export const Content = () => {
  const [firstDisabled, setFirstDisabled] = useState<boolean>(true)
  const [lastDisabled, setLastDisabled] = useState<boolean>(false)
  const { filtered, page, setCustomer } = useGlobalContext()

  const navigate = useNavigate()

  const perPage = 9
  const resto = filtered.length % perPage
  const partesInteiras = (filtered.length - resto) / perPage
  const ultimaPagina = resto === 0 ? partesInteiras : partesInteiras + 1
  const users: number[] = []

  if (filtered.length <= perPage) {
    for (let i = 1; i < filtered.length; i++) {
      users.push(i)
    }
  } else {
    page === ultimaPagina
      ? users.push(resto)
      : users.push(0, 1, 2, 3, 4, 5, 6, 7, 8)
  }

  useEffect(() => {
    page === ultimaPagina ? setLastDisabled(true) : setLastDisabled(false)
    page === 1 ? setFirstDisabled(true) : setFirstDisabled(false)
  }, [ultimaPagina, page])

  const verificacao1 = filtered.slice(filtered.length - resto, filtered.length)

  const restoArray = verificacao1.map(
    (_: unknown, index: number) => index + (page - 1) * perPage,
  )

  const seRestoIsZero = resto === 0 ? [0, 1, 2, 3, 4, 5, 6, 7, 8] : restoArray

  const arrayNoveElementos =
    page === 1 ? users : users.map((i) => i + (page - 1) * perPage)

  const ultimoArray =
    page === ultimaPagina ? seRestoIsZero : arrayNoveElementos

  const goToCustomerPage = (customer: userProps) => {
    setCustomer(customer)
    navigate('/customer')
  }

  return (
    <>
      <S.ContentInternal>
        <S.ContentHeader>
          <T.Text12>Home &gt; Users &gt; Details</T.Text12>
          <T.Title>Members List</T.Title>
        </S.ContentHeader>
        <U.HStack>
          <FilterSection />
          <Routes>
            <Route
              path='/'
              element={
                <ErrorBoundary>
                  <U.VStack>
                    <S.CardHead>
                      <T.Text16>
                        Show {ultimoArray.length} of {filtered.length} members
                      </T.Text16>
                      <T.Text16>
                        <b>Order by:</b> Name <SetaIcon />
                      </T.Text16>
                    </S.CardHead>
                    <S.ContentInternalGrid>
                      {filtered.length !== 0
                        ? (
                          ultimoArray.map((i, index) => {
                            return (
                              <Suspense
                                key={index}
                                fallback={<div>just a few seconds</div>}
                              >
                                <S.CardButton
                                  onClick={() => goToCustomerPage(filtered[i])}
                                >
                                  <S.CardUser>
                                    <S.CardUserImg
                                      loading='lazy'
                                      src={filtered[i].picture.thumbnail}
                                    />
                                    <S.CardUserAjuste>
                                      <T.Text20>
                                        {filtered[i].name.first}{' '}
                                        {filtered[i].name.last}
                                      </T.Text20>
                                      <S.CardUserRua>
                                        <T.Text14>
                                          {filtered[i].location.street}
                                        </T.Text14>
                                      </S.CardUserRua>
                                      <T.Text12>
                                        {filtered[i].location.city}
                                      </T.Text12>
                                    </S.CardUserAjuste>
                                    <S.CardUserApagar>
                                      <T.Text12>
                                        {filtered[i].location.state} - CEP:
                                        {filtered[i].location.postcode}
                                      </T.Text12>
                                    </S.CardUserApagar>
                                  </S.CardUser>
                                </S.CardButton>
                              </Suspense>
                            )
                          })
                        )
                        : (
                          <S.ContentEmptylist>
                            <T.Text20>Selecione o Estado</T.Text20>
                          </S.ContentEmptylist>
                        )}
                    </S.ContentInternalGrid>
                    {filtered.length !== 0
                      ? (
                        <Pagination
                          total={ultimaPagina}
                          activePage={page}
                          firstDisabled={firstDisabled}
                          lastDisabled={lastDisabled}
                        // onClick={setPage}
                        />
                      )
                      : (
                        ''
                      )}
                  </U.VStack>
                </ErrorBoundary>
              }
            />
            <Route
              path='/customer'
              element={
                <ErrorBoundary>
                  <CustomerPage />
                </ErrorBoundary>
              }
            />
          </Routes>
        </U.HStack>
      </S.ContentInternal>
    </>
  )
}
