import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import AccountSetup from './Pages/AuthPages/AccountSetup'
import UsernamePage from './Pages/AuthPages/UsernameSetup'
import EmailVerification from './Pages/AuthPages/EmailVerification'
import PasswordSetup from './Pages/AuthPages/PasswordSetup'
import ProfilePicture from './Pages/AuthPages/ProfilePicture'
import LanguageSelection from './Pages/AuthPages/LanguageSelection'
import CategorySelection from './Pages/AuthPages/CategorySelection'


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/setup/Account" element={<AccountSetup />} />
        <Route path='/setup/EmailVerification' element={<EmailVerification />} />
        <Route path='/setup/Password' element={<PasswordSetup />} /> 
        <Route path='/setup/ProfilePicture' element={<ProfilePicture />} />
        <Route path='/setup/Language' element={<LanguageSelection />} />
        <Route path="/setup/username" element={<UsernamePage />} />
        <Route path="/setup/CategorySelection" element={<CategorySelection />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App