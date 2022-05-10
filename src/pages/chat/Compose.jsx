import React, { useState } from 'react'
import MessageInput from '../../components/MessageInput'
import { postNewJoinMessage } from '../../services/Message-service'

const Compose = ({ user }) => {
  const [message, setMessage] = useState({
    message: '',
    userId: user.id,
    private: '',
    mood: ''
  })

  console.log(message)

  const handleMessage = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postMessage(message)
  }

  const postMessage = async (data) => {
    const msg = await postNewJoinMessage(data)
  }

  return (
    <div className="container">
      <MessageInput handleMessage={handleMessage} handleSubmit={handleSubmit} />
    </div>
  )
}

export default Compose
