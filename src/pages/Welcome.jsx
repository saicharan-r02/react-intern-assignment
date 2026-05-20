import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="phone-wrapper">
      <div className="welcome-page">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <Button
          label="Create Account"
          onClick={() => navigate('/register')}
        />
        <Button
          label="Already Registered? Login"
          onClick={() => navigate('/login')}
          variant="secondary"
        />
      </div>
    </div>
  )
}