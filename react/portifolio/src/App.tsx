import { ThemeProvider } from 'styled-components'
import About from './containers/About'
import Projects from './containers/Projetcs'
import Sidebar from './containers/Sidebar'
import GlobalStyle, { Container } from './styles'
// import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'
import lightTheme from './themes/light'
function App() {
  const [isUsingDarkTheme, setDarkTheme] = useState(false)

  function switchTheme() {
    setDarkTheme(!isUsingDarkTheme)
  }

  return (
    <ThemeProvider theme={isUsingDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar switchTheme={switchTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
