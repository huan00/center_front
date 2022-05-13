import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MessageInput from '../../components/MessageInput'
import { postNewJoinMessage } from '../../services/Message-service'

const Compose = ({ user }) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState({
    message: '',
    userId: user.id,
    private: false,
    mood: ''
  })

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postMessage(message)
    navigate('/chat')
  }

  const postMessage = async (data) => {
    await postNewJoinMessage(data)
  }

  return (
    <div className="container">
      <MessageInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        privateMsg={false}
        emotion={true}
        title={'What would you like comments on?'}
      />
    </div>
  )
}

export default Compose
