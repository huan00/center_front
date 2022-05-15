import React, { useState, useEffect } from 'react'
import { postNewJoinMessage } from '../../../services/Message-service'
import MessageInput from '../../MessageInput'
import { useNavigate } from 'react-router-dom'

const LogIt = ({ user, postSurveyResult }) => {
  const [message, setMessage] = useState({
    message: '',
    mood: '',
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

    await postNewJoinMessage(message)
    setMessage({ message: '', userId: user.id, private: true, mood: '' })
    navigate('/activity')
  }

  return (
    <div className="container">
      <MessageInput
        handleChange={handleMessage}
        message={message}
        handleSubmit={handleSubmit}
        privateMsg={false}
        emotion={true}
        title={'What is on your mind?'}
      />
    </div>
  )
}

export default LogIt
