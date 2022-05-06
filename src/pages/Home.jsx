import React, { useState } from 'react'
import '../styles/App.css'

const Home = () => {
  const [greeting, setGreeting] = useState('Discover Center')

  return (
    <div className="home">
      <div className="home-bg">
        <h1 className="home-title">{greeting}</h1>
      </div>
    </div>
  )
}

export default Home
