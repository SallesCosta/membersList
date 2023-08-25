import { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext, initialProps } from '@/shared/globalContext'
import * as S from './styles'
import * as T from '@/styles/text'

export const CustomerPage = () => {
  const { customer, setCustomer } = useGlobalContext()
  const navigate = useNavigate()

  const handleClick = () => {
    setCustomer(initialProps)
    navigate('/')
  }

  return (
    <S.CustomerContainer>
      <S.CustomerButton onClick={handleClick}>
        {/* <S.CustomerButton onClick={() => navigate('/')}> */}
        back
      </S.CustomerButton>
      <S.CustomerAjuste>
        <Suspense fallback={<div>Loading...</div>}>
          <S.CustomerImg loading='lazy' src={customer?.picture.large} />
        </Suspense>
        <T.Text20>
          <b>
            {customer?.name.title} {customer?.name.last}, {customer?.name.first}
          </b>
        </T.Text20>
      </S.CustomerAjuste>
      <S.CustomerSection>
        <T.Text14>Street:</T.Text14>
        <T.Text16>
          <b>{customer?.location.street}</b>
        </T.Text16>
      </S.CustomerSection>
      <S.CustomerSection>
        <T.Text14>City/State:</T.Text14>
        <T.Text16>
          <b>
            {customer?.location.city}/ {customer?.location.state}
          </b>
        </T.Text16>
      </S.CustomerSection>
      <S.CustomerSection>
        <T.Text14>Timezone:</T.Text14>
        <T.Text16>
          <b>(UTC {customer?.location.timezone.offset})</b>
        </T.Text16>
      </S.CustomerSection>
      <S.CustomerSection>
        <T.Text14>Description:</T.Text14>
        <T.Text16>
          <b>{customer?.location.timezone.description}</b>
        </T.Text16>
      </S.CustomerSection>
      <S.CustomerSection>
        <T.Text14>email: </T.Text14>
        <T.Text16>
          <b>{customer?.email}</b>
        </T.Text16>
      </S.CustomerSection>
      <S.CustomerSection>
        <T.Text14>Telephone: </T.Text14>
        <T.Text16>
          <b>{customer?.cell}</b>
        </T.Text16>
      </S.CustomerSection>
    </S.CustomerContainer>
  )
}
