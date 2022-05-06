import React, { useEffect, useState } from 'react'
import '../styles/App.css'
import SignUp from '../components/SignUp'

const Home = () => {
  const [greeting, setGreeting] = useState('Discover Center')

  useEffect(() => {}, [])

  return (
    <div className="home">
      <div className="home-bg">
        <SignUp />
        <h1 className="home-title">{greeting}</h1>
      </div>
    </div>
  )
}

export default Home
