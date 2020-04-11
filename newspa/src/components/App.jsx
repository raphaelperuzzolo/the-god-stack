import React, { useContext } from 'react'
import styled from 'styled-components'
import {
  Block,
} from 'components'
import { ThemeContext } from 'styles'
import Routes from './Routes'

const Wrapper = styled(Block)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  font-family: sans-serif
`

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <Wrapper theme={theme}>
      <Routes theme={theme} toggleTheme={toggleTheme} />
    </Wrapper>
  )
}

export default App