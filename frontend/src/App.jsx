import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login';
import Index from './pages/Index';
import RegisterPage from './pages/Register';
import AddMember from './pages/AddMember';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' >
          <Route path='' element={<Index />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='addMember' element={<AddMember />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
