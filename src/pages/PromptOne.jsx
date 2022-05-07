import React, { useState } from 'react'

const PromptOne = () => {
  const [message, setMessage] = useState('Oh no, why?')
  return (
    <div>
      <div>
        <h3>{message}</h3>
      </div>
      <div></div>
    </div>
  )
}

export default PromptOne
