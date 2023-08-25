import { ContextProvider } from '@/shared/globalContext'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

type Props = {
  children: ReactNode | ReactNode[];
};

type Provider = {
  component: (props: any) => JSX.Element | null;
  props?: unknown;
};

const providers: Provider[] = [
  { component: BrowserRouter },
  { component: ContextProvider },
]

export const Providers = ({ children }: Props) => {
  return (
    <>
      {providers.reduceRight((child, provider) => {
        const allProps = Object.assign({}, provider.props)
        return <provider.component allProps>{child}</provider.component>
      }, children)}
    </>
  )
}
