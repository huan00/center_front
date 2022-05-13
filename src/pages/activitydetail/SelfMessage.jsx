import React, { useState, useEffect } from 'react'
import { getPrivateMesssage } from '../../services/Message-service'

const SelfMessage = ({ user }) => {
  const [privateMesages, setPrivateMessages] = useState([])

  useEffect(() => {
    getPrivateMsg(user.id)
  }, [])

  const getPrivateMsg = async (id) => {
    const privateMsg = await getPrivateMesssage(id)
    setPrivateMessages(privateMsg)
  }
  console.log(privateMesages)
  return (
    <div className="container">
      {privateMesages && (
        <div className="selfMsg">
          {privateMesages.map((msg) => (
            <div className="selfMsg-content">
              <p>MessageId: {msg.id}</p>
              <p>Message: {msg.message}</p>
              {msg.messageMood[0] && <p>Mood: {msg.messageMood[0].mood}</p>}
              <p>Date: {new Date(msg.createdAt).toDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelfMessage
