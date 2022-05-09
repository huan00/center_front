import React from 'react'
import Home from './Home'
import SignUp from '../components/SignUp'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser, user }) => {
  let navigate = useNavigate()

  return (
    <div>
      {user ? (
        <>{navigate('select')}</>
      ) : (
        <SignUp setUser={setUser} user={user} />
      )}
    </div>
  )
}

export default Login
