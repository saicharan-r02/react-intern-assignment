import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  password: '',
  company: '',
  isAgency: '',
}

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const isFormValid =
    form.fullName.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.password.trim() &&
    form.isAgency !== ''

  const handleSubmit = () => {
    if (!isFormValid) return
    navigate('/account-settings', {
      state: { name: form.fullName, email: form.email },
    })}

  return (
    <div className="phone-wrapper">
      <div className="auth-page">
        <h1>Create your{'\n'}PopX account</h1>
        
        <InputField
          label="Full Name*"
          type="text"
          name="fullName"
          placeholder="Marry Deo"
          value={form.fullName}
          onChange={handleChange}
        />

        <InputField
          label="Phone number*"
          type="tel"
          name="phone"
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={handleChange}
        />

        <InputField
          label="Email address*"
          type="email"
          name="email"
          placeholder="marry@gmail.com"
          value={form.email}
          onChange={handleChange}
        />

        <InputField
          label="Password*"
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />

        <InputField
          label="Company name"
          type="text"
          name="company"
          placeholder="Your company"
          value={form.company}
          onChange={handleChange}
        />

        <p className="radio-group-label"> Are you an Agency?<span>*</span> </p>
        <div className="radio-options">
          <label>
            <input
              type="radio"
              name="isAgency"
              value="Yes"
              checked={form.isAgency === 'Yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="isAgency"
              value="No"
              checked={form.isAgency === 'No'}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <div className="auth-submit">
          <Button
            label="Create Account"
            onClick={handleSubmit}
            disabled={!isFormValid}
          />
        </div>
      </div>
    </div>
  )
}
