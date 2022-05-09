import React, { useState } from 'react'
import { postMessage } from '../services/Message-service'
import MessageInput from '../components/MessageInput'

const LogIt = ({ user }) => {
  const [message, setMessage] = useState({ message: '', userId: user.id })
  console.log(user)

  const handleMessage = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const msg = await postMessage(message)
  }

  return (
    <div>
      <MessageInput
        handleMessage={handleMessage}
        message={message}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default LogIt
