import * as S from '@/styles/styles'
import { Component, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
interface propsProps {
  children: ReactNode;
}

interface stateProps {
  hasError: boolean;
}

export class ErrorBoundary extends Component<propsProps, stateProps> {
  constructor (props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (_: Error): stateProps {
    return { hasError: true }
  }

  render () {
    if (this.state.hasError) {
      return <ErrorComponent />
    }
    return this.props.children
  }
}

function ErrorComponent () {
  const navigate = useNavigate()
  return (
    <S.ErrorContainer>
      <h3>Something went wrong.</h3>
      <h3>aqui tinha o botal de navigate para home</h3>
      <S.ErrorButton />
    </S.ErrorContainer>
  )
}
