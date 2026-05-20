import avatarImg from '../assets/avatar.jpg'   // ← changed

export default function Avatar({ name, email }) {
  return (
    <div className="profile-row">
      <div className="avatar-wrapper">
        <img src={avatarImg} alt="Profile" />   {/* ← changed */}
        <div className="avatar-badge">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            width="11"
            height="11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm0-8.4a5.2 5.2 0 1 1 0 10.4A5.2 5.2 0 0 1 12 6.8zM9 2 7.17 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.17L15 2H9z" />
          </svg>
        </div>
      </div>

      <div className="profile-info">
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  )
}