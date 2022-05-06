import React, { useEffect, useState } from 'react'
import '../styles/App.css'
import SignUp from '../components/SignUp'

const Home = () => {
  const [greeting, setGreeting] = useState('Discover Center')
  const [signupState, setSignupState] = useState('true')

  useEffect(() => {}, [])

  return (
    <div className="home">
      <SignUp />
      <div className="home-bg">
        <h1 className="home-title">{greeting}</h1>
      </div>
      <SignUp />
    </div>
  )
}

export default Home
