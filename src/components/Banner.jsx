import React, { useState } from 'react'

const Banner = () => {
  const [username, setUsername] = useState('coderXp')

  return (
    <div className="banner">
      <div className="banner-img">
        <h1 className="banner-greeting">Welcome Back {username}</h1>
        <p className="banner-msg">
          Today is your opportunity to build the tomorrow you want.
        </p>
      </div>
    </div>
  )
}

export default Banner
