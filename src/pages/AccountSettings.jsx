import { useLocation, useNavigate } from 'react-router-dom'
import Avatar from '../components/Avatar'

export default function AccountSettings() {
  const location = useLocation()
  const navigate  = useNavigate()

  const name  = location.state?.name  || 'Marry Doe'
  const email = location.state?.email || 'Marry@Gmail.Com'

  if (!location.state) {
    navigate('/', { replace: true })
    return null
  }

  return (
    <div className="phone-wrapper">
      <div className="settings-page">

        <div className="settings-header">
          <h2>Account Settings</h2>

          <Avatar name={name} email={email} />

          <p className="settings-bio">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        <div className="settings-body" />

      </div>
    </div>
  )
}