import React from 'react'
import SignUp from '../components/SignUp'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser, user, desktop }) => {
  let navigate = useNavigate()

  return (
    <div className="container">
      {user ? (
        <>{desktop ? navigate('/dashboard') : navigate('survey')}</>
      ) : (
        <SignUp setUser={setUser} user={user} desktop={desktop} />
      )}
    </div>
  )
}

export default Login
