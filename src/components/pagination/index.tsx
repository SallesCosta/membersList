type CenterRuleProps = {
  total: number;
  activePage: number;
};

type PageProps = any
// type PageProps = (number | '...')[];

const centerRule = ({ total, activePage }: CenterRuleProps) =>
  activePage - 1 <= 0
    ? 1
    : activePage === total
      ? activePage - 2
      : activePage - 1

const isNumber = (value: number) => {
  return typeof value === 'number'
}

const pagination = ({ total = 1, activePage = 1 } = {}) => {
  if (!isNumber(total)) {
    throw new TypeError('total should be a number')
  }

  if (!isNumber(activePage)) {
    throw new TypeError('activePage should be a number')
  }

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const visiblePages = 3
  let pages: PageProps = [
    1,
    ...Array.from(
      { length: visiblePages },
      (_, i) => i + centerRule({ total, activePage }),
    ),
    total,
  ]

  pages = pages.filter((page: any, index: any, array: string | any[]) => array.indexOf(page) === index)

  let firstPage = pages[0]
  let secondPage = pages[1]

  // if (isNumber(firstPage)) { }

  if (secondPage === firstPage + 2) {
    pages = [firstPage, firstPage + 1, ...pages.slice(1)]
  }

  let penultimatePage = pages[pages.length - 2]
  let lastPage = pages[pages.length - 1]

  if (penultimatePage === lastPage - 2) {
    pages = [...pages.slice(0, -1), lastPage - 1, lastPage]
  }

  firstPage = pages[0]
  secondPage = pages[1]

  if (secondPage > firstPage + 2) {
    pages = [firstPage, '...', ...pages.slice(1)]
  }

  penultimatePage = pages[pages.length - 2]
  lastPage = pages[pages.length - 1]

  if (penultimatePage < lastPage - 2) {
    pages = [...pages.slice(0, -1), '...', lastPage]
  }

  return pages
}

export default pagination
