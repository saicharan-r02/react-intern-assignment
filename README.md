# PopX App — React JS Intern Assignment

A pixel-perfect React JS implementation of the PopX mobile app interface, 
built as part of the Educase India internship qualifier assignment.

## 🔗 Links

- **Live Demo:** https://wonderful-twilight-482247.netlify.app
- **GitHub Repo:** https://github.com/saicharan-r02/react-intern-assignment
- **Design Reference:** https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd

---

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Welcome | `/` | Landing page with Create Account and Login buttons |
| Register | `/register` | Sign up form with all required fields |
| Login | `/login` | Sign in with email and password |
| Account Settings | `/account-settings` | User profile display page |

---

## ✨ Features

- Pixel-perfect mobile UI centered on webpage
- Seamless navigation between all 4 pages
- Floating label inputs matching original design
- Form validation on Register and Login pages
- User data passed from Register/Login to Account Settings
- Fully responsive mobile frame layout
- Clean component-based architecture

---

## 🛠️ Tech Stack

- **React JS** — UI library
- **Vite** — Build tool
- **React Router DOM** — Client-side navigation
- **CSS** — Custom styling (no external UI library)

---

## 📁 Project Structure

react-intern-assignment/
├── public/
│   └── _redirects              # Netlify routing fix
├── src/
│   ├── assets/
│   │   └── avatar.png          # Profile image
│   ├── components/
│   │   ├── Avatar.jsx          # Profile picture with camera badge
│   │   ├── Button.jsx          # Reusable primary/secondary button
│   │   └── InputField.jsx      # Floating label input component
│   ├── pages/
│   │   ├── Welcome.jsx         # Landing page
│   │   ├── Register.jsx        # Create account page
│   │   ├── Login.jsx           # Sign in page
│   │   └── AccountSettings.jsx # User profile page
│   ├── styles/
│   │   └── global.css          # All styles
│   ├── App.jsx                 # Routes setup
│   └── main.jsx                # Entry point
├── index.html
├── netlify.toml                # Netlify build config
├── vercel.json                 # Vercel routing config
├── package.json
└── vite.config.js

---


## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or above)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/saicharan-r02/react-intern-assignment.git

# Navigate into the folder
cd react-intern-assignment

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🔄 Navigation Flow

Welcome Page
├── Create Account → Register Page
│                       └── Create Account → Account Settings
└── Already Registered? Login → Login Page
└── Login → Account Settings

---

## 📦 Components

### `InputField.jsx`
Reusable floating label input used across Register and Login pages.
- Props: `label`, `type`, `name`, `placeholder`, `value`, `onChange`

### `Button.jsx`
Reusable button with primary and secondary variants.
- Props: `label`, `onClick`, `variant`, `disabled`

### `Avatar.jsx`
Profile picture component with purple camera badge overlay.
- Props: `name`, `email`

---

## 🌐 Deployment

This project is hosted on **Netlify**.

- Auto deploys on every `git push` to `main` branch
- Routing handled via `netlify.toml` and `public/_redirects`

---

## 👤 Author

**Sai Charan R**  
React JS Intern Assignment — Educase India  
May 2026
