import { useGlobalContext } from '@/shared/globalContext'
import pagination from './index'
import * as S from './style'
import { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import { ArrowLeftIcon } from '@/assets/arrowLeftIcon'
import { ArrowRightIcon } from '@/assets/arrowRightIcon'

type PageProps = {
  page: number | string,
  activePage: number;
};

type PaginationProps = {
  total: number;
  activePage: number;
  firstDisabled: boolean;
  lastDisabled: boolean;
};

const Dots = () => <S.PaginationSpreadDots>...</S.PaginationSpreadDots>

const Page = ({ page, activePage }: PageProps) => {
  const { setPage } = useGlobalContext()

  const isDot = page === '...'

  const Component = isDot ? Dots : 'span'
  const handleClick = isDot ? null : () => setPage(+page)

  return (
    <S.PaginationLink active={activePage === page} onClick={handleClick}>
      <Component>{page}</Component>
    </S.PaginationLink>
  )
}

export const Pagination = ({
  total,
  activePage,
  firstDisabled,
  lastDisabled,
}: PaginationProps) => {
  const { setPage, page } = useGlobalContext()

  const increasePage = () => setPage(page + 1)
  const decreasePage = () => setPage(page - 1)

  return (
    <S.PaginationContainer>
      <S.PaginationChangePage disabled={firstDisabled} onClick={decreasePage}>
        <ArrowLeftIcon />
      </S.PaginationChangePage>
      <S.PaginationInternal>
        {pagination({ total, activePage }).map((p: number, index: number) => (
          <Page page={p} key={index} activePage={activePage} />
        ))}
      </S.PaginationInternal>
      <S.PaginationChangePage disabled={lastDisabled} onClick={increasePage}>
        <ArrowRightIcon />
      </S.PaginationChangePage>
    </S.PaginationContainer>
  )
}
