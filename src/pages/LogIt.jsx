import React, { useState, useEffect } from 'react'
import { postMessage } from '../services/Message-service'
import MessageInput from '../components/MessageInput'
import { useNavigate } from 'react-router-dom'

const LogIt = ({ user, postSurveyResult }) => {
  const [message, setMessage] = useState({
    message: '',
    userId: user.id,
    private: true
  })

  useEffect(() => {
    postSurveyResult()
  }, [])

  const handleMessage = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    const msg = await postMessage(message)
    setMessage({ message: '', userId: user.id, private: true })
    navigate('/activity')
  }

  return (
    <div className="container">
      <MessageInput
        handleMessage={handleMessage}
        message={message}
        handleSubmit={handleSubmit}
        privateMsg={false}
        emotion={false}
        title={'What is on your mind?'}
      />
    </div>
  )
}

export default LogIt
