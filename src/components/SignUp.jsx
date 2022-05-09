import React, { useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Login, SignUpUser } from '../services/Auth-service'

const SignUp = ({ setUser, user }) => {
  const [xMark, setXMark] = useState('show')
  const [login, setLogin] = useState(true)
  const [authMsg, setAuthMsg] = useState('Login')
  const [formData, setFormData] = useState({
    email: '',
    password: ''
    // firstName: '',
    // lastName: ''
  })

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login) {
      handleLogin(formData)
    } else {
      console.log('signup')
      handleSignUp(formData)
    }
  }

  const handleSignUp = async (data) => {
    const res = await SignUpUser(data)
    setFormData({ email: '', password: '' })
    toggleLogin()
  }

  const handleLogin = async (data) => {
    const payload = await Login(data)
    console.log(payload)
    setUser(payload)

    setFormData({ email: '', password: '' })
    navigate(`/select`)
  }

  const toggleXMark = () => {
    xMark === 'show' ? setXMark('none') : setXMark('show')
  }
  const toggleLogin = () => {
    if (login) {
      setLogin(false)
      setAuthMsg('Sign Up')
    } else {
      setLogin(true)
      setAuthMsg('Login')
    }
  }

  console.log(user)

  return (
    <div className="signup" style={{ display: xMark }}>
      <FontAwesomeIcon
        icon={faXmark}
        className="signup-close"
        onClick={toggleXMark}
      />
      <div className="signup-img"></div>
      <div className="signup-msg">
        <h1>{authMsg}</h1>
        <p>Start getting motivational advise from Us</p>
      </div>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        {login === false && (
          <>
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
          </>
        )}
        <button>{authMsg}</button>
      </form>
      <div className="signup-login">
        <p>
          {login ? (
            <>
              Not a member?
              <span onClick={toggleLogin} className="signup-click">
                Sign Up
              </span>{' '}
            </>
          ) : (
            <>
              Already a member?
              <span onClick={toggleLogin} className="signup-click">
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  )
}

export default SignUp
