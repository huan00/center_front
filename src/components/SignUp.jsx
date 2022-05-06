import React from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SignUp = () => {
  return (
    <div className="signup">
      <FontAwesomeIcon icon={faXmark} className="signup-close" />
      <div className="signup-img"></div>
      <div className="signup-msg">
        <h1>Sign Up</h1>
        <p>Start getting motivational advise from Us</p>
      </div>

      <form className="signup-form">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <button>Sign Up</button>
      </form>
      <div className="signup-login">
        <p>
          Already a member? <a href="">login</a>
        </p>
      </div>
    </div>
  )
}

export default SignUp
