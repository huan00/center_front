import React, { useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

const SignUp = () => {
  const [xMark, setXMark] = useState('show')
  const [login, setLogin] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login) {
      handleLogin()
    } else {
      console.log('signup')
      handleSignUp(formData)
    }
  }

  const handleSignUp = async (data) => {
    const res = await axios.post(`http://localhost:3001/users/signup`, data)
    console.log(res)
  }

  const handleLogin = async (data) => {
    const res = await axios.post('')
    console.log('login')
  }

  const toggleXMark = () => {
    xMark === 'show' ? setXMark('none') : setXMark('show')
  }
  const toggleLogin = () => {
    login ? setLogin(false) : setLogin(true)
  }

  return (
    <div className="signup" style={{ display: xMark }}>
      <FontAwesomeIcon
        icon={faXmark}
        className="signup-close"
        onClick={toggleXMark}
      />
      <div className="signup-img"></div>
      <div className="signup-msg">
        <h1>Sign Up</h1>
        <p>Start getting motivational advise from Us</p>
      </div>

      <form className="signup-form">
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
        <button onSubmit={handleSubmit}>Sign Up</button>
      </form>
      <div className="signup-login">
        <p>
          Already a member? <span onClick={toggleLogin}>login</span>
        </p>
      </div>
    </div>
  )
}

export default SignUp
