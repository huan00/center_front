import React, { useState, useEffect } from 'react'
import { postMessage } from '../services/Message-service'
import MessageInput from '../components/MessageInput'

const LogIt = ({ user, setSurvey, survey, postSurveyResult }) => {
  const [message, setMessage] = useState({ message: '', userId: user.id })

  useEffect(() => {
    if (survey.activity) {
      postSurveyResult()
    }
    return () => {
      setSurvey(null)
    }
  }, [])

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
