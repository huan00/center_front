import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Login, SignUpUser } from '../services/Auth-service'

const SignUp = ({ setUser, desktop }) => {
  const [errorMsg, setErrorMsg] = useState('')
  const [loginActive, setLoginActive] = useState('loginActive')
  const [signupActive, setSignUpActive] = useState('signup-active')
  const [login, setLogin] = useState(true)
  const [authMsg] = useState('Log in')
  const [signUp] = useState('Sign Up')
  const [inputActive, setInputActive] = useState('')
  const [btnMsg, setBtnMsg] = useState('Log in')
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login) {
      handleLogin(formData)
    } else {
      handleSignUp(formData)
    }
  }

  const handleSignUp = async (data) => {
    await SignUpUser(data)
    setFormData({ email: '', password: '' })
    toggleLogin()
  }

  const handleLogin = async (data) => {
    const payload = await Login(data)

    setUser(payload)
    setFormData({ email: '', password: '' })
    setErrorMsg('')
    if (desktop) {
      navigate(`/dashboard`)
    } else {
      navigate(`/survey`)
    }
  }

  const toggleLogin = () => {
    if (login) {
      setLogin(false)
      setLoginActive('')
      setSignUpActive('signupActive')
      setInputActive('inputActive')
      setBtnMsg('Create your center')
    } else {
      setLogin(true)
      setInputActive('')
      setSignUpActive('')
      setBtnMsg('Login')
      setLoginActive('loginActive')
    }
  }

  return (
    <div className="signup container">
      <div className="signup-error">{errorMsg}</div>
      <div className="signup-msg">
        <h1 className={`${loginActive} loginSignUp`} onClick={toggleLogin}>
          {authMsg}
        </h1>
        <h1 className={`${signupActive} loginSignUp`} onClick={toggleLogin}>
          {signUp}
        </h1>
      </div>

      <form className={`signup-form `} onSubmit={handleSubmit}>
        {login && <label htmlFor="email">Email</label>}

        <input
          className={`${inputActive}`}
          id="email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          type="email"
          placeholder="anans@email.com"
        />
        {login && <label htmlFor="password">Password</label>}
        <input
          className={`${inputActive}`}
          id="password"
          onChange={handleChange}
          value={formData.password}
          name="password"
          type="password"
          placeholder="********"
        />
        {login === false && (
          <>
            <input
              className={`${inputActive}`}
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
              type="text"
              placeholder="First Name"
            />
            <input
              className={`${inputActive}`}
              onChange={handleChange}
              value={formData.lastName}
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
          </>
        )}
        <button className="sign-up-btn">{btnMsg}</button>
      </form>
    </div>
  )
}

export default SignUp
