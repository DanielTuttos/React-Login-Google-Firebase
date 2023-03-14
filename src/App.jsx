import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>

    </Container>
  )
}

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
`

export default App
