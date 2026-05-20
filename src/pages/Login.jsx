import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')

  const isFormValid = email.trim() !== '' && password.trim() !== ''

  const handleLogin = () => {
    if (!isFormValid) return
    navigate('/account-settings', {
      state: { name: 'Marry Doe', email },
    })
  }

  return (
    <div className="phone-wrapper">
      <div className="auth-page">
        <h1>Signin to your PopX account</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <InputField
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div style={{ marginTop: 12 }}>
          <Button
            label="Login"
            onClick={handleLogin}
            disabled={!isFormValid}
          />
        </div>
      </div>
    </div>
  )
}