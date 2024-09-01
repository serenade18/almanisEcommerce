import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
