import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Providers } from '@/shared/providers'
import { theme } from '@/styles/theme'
import { Header } from './components/header/header'
import { Content } from './components/content/content'
import { Footer } from './components/footer/footer'

export function App() {
  return (
    <Providers>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Content />
        <Footer />
      </ThemeProvider>
    </Providers>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
}

html {
  font-size: 16px;
}

body{
  background: 'bg-default';
  font-family: 'roboto', sans-serif;
  width: 100%;
}

button {
  cursor: pointer;
}
`
