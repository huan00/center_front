import React, { useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Login, SignUpUser } from '../services/Auth-service'

const SignUp = ({ setUser, user }) => {
  const [xMark, setXMark] = useState('show')
  const [loginActive, setLoginActive] = useState('loginActive')
  const [signupActive, setSignUpActive] = useState('signup-active')
  const [login, setLogin] = useState(true)
  const [authMsg, setAuthMsg] = useState('Log in')
  const [signUp, setSignUp] = useState('Sign Up')
  const [inputActive, setInputActive] = useState('')
  const [btnMsg, setBtnMsg] = useState('Log in')
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

  // const toggleXMark = () => {
  //   xMark === 'show' ? setXMark('none') : setXMark('show')
  // }
  const toggleLogin = () => {
    if (login) {
      setLogin(false)
      // setAuthMsg('Sign Up')
      setLoginActive('')
      setSignUpActive('signupActive')
      setInputActive('inputActive')
      setBtnMsg('Create your center')
    } else {
      setLogin(true)
      // setAuthMsg('Login')
      setInputActive('')
      setSignUpActive('')
      setBtnMsg('Login')
      setLoginActive('loginActive')
    }
  }

  return (
    <div
      className="signup container"
      // style={{ display: xMark }}
    >
      {/* <FontAwesomeIcon
        icon={faXmark}
        className="signup-close"
        onClick={toggleXMark}
      /> */}
      {/* <div className="signup-img"></div> */}
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
      {/* <div className="signup-login">
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
      </div> */}
    </div>
  )
}

export default SignUp
