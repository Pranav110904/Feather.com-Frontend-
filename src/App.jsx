
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import AccountSetup from './Pages/AccountSetup'
import UsernamePage from './Pages/UsernameSetup'
function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/setup/Account" element={<AccountSetup />} />
        <Route path="/setup/username" element={<UsernamePage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App