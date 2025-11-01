import { useState } from 'react'
import Navbar from './components/Navbar'
import './components/Project'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App