import { useState } from 'react'
import './App.css'
import { Header } from './components/common/Header/Header'

import { Body } from './pages/Body/Body'
import { Footer } from './components/common/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default App
