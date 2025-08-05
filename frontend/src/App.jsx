import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login';
import Index from './pages/Index';
import RegisterPage from './pages/Register';
import LibrarianDashboard from './pages/LibrarianDashborad';
import IssueBook from './pages/Books/Issue_Books';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' >
          <Route path='' element={<Index />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='dashboard' element={<LibrarianDashboard />}/>
          <Route path='issue_books' element={<IssueBook/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
