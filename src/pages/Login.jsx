import React from 'react'
import SignUp from '../components/SignUp'

const Login = ({ setUser, user }) => {
  return (
    <div>
      <SignUp setUser={setUser} user={user} />
    </div>
  )
}

export default Login
