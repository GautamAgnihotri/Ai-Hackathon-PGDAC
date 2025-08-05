import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Test from './pages/Test';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Test />} />
      </Routes>
    </>
  )
}

export default App
