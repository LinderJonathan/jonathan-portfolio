import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import './components/Project'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

    return (
    <>
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={< Home/>}/>
                <Route path="/Contact" element={< Contact/>}/>
                <Route path="/Portfolio" element={< Portfolio/>}/>
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default App