import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login';
import Index from './pages/Index';
import RegisterPage from './pages/Register';
import AddBookPage from './pages/AddBook';
import AddBookCopy from './pages/AddBookCopy';
import BooksCatalog from './pages/BooksCatalog';
import BookCopiesManagement from './pages/BookCopiesManagement';
import CollectPayment from './pages/CollectPayment';
import EditBook from './pages/EditBook';
import LibrarianDashboard from './pages/LibrarianDashborad';
import IssueBook from './pages/Books/Issue_Books';
import AddMember from './pages/AddMember';
import UserManagement from './pages/UserManagement';
import ReturnBook from './pages/ReturnBook';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' >
          <Route path='' element={<Index />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='add-book' element={<AddBookPage />} />
          <Route path='add-book-copy' element={<AddBookCopy />} />
          <Route path='books-catalog' element={<BooksCatalog />} />
          <Route path='books-copies-management' element={<BookCopiesManagement />} />
          <Route path='collect-payment' element={<CollectPayment />} />
          <Route path='edit-book' element={<EditBook />} />
          <Route path='dashboard' element={<LibrarianDashboard />}/>
          <Route path='issueBooks' element={<IssueBook/>}/>
          <Route path='addMember' element={<AddMember />} />
          <Route path='userManagement' element={<UserManagement />} />
          <Route path='returnBook' element={<ReturnBook />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
