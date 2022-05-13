import React from 'react'
import SignUp from '../components/SignUp'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser, user }) => {
  let navigate = useNavigate()

  return (
    <div className="container">
      {user ? (
        <>{navigate('select')}</>
      ) : (
        <SignUp setUser={setUser} user={user} />
      )}
    </div>
  )
}

export default Login
