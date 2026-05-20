import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Login from './pages/Login'
import AccountSettings from './pages/AccountSettings'
import './styles/global.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                 element={<Welcome />} />
        <Route path="/register"         element={<Register />} />
        <Route path="/login"            element={<Login />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="*"                 element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}