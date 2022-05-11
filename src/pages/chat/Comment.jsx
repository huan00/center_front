import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MessageInput from '../../components/MessageInput'
import {
  getMessageDetailById,
  postComment
} from '../../services/Message-service'

const Comment = ({ user }) => {
  const { id } = useParams()
  const [mood, setMood] = useState('')
  const [commentData, setCommentData] = useState({
    userId: user.id,
    message: '',
    private: true,
    mood: mood
  })

  useEffect(() => {
    getMessageDetail(id)
  }, [])

  const getMessageDetail = async (id) => {
    const msg = await getMessageDetailById(id)
    setMood(msg.messageMood[0].MessageMood.moodId)
  }

  const handleChange = (e) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const comment = await postComment(id, commentData)

    setCommentData({
      userId: user.id,
      message: '',
      private: true,
      mood: mood
    })
  }
  return (
    <div className="container">
      <MessageInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        privateMsg={false}
        title={'What would you like to comment?'}
      />
    </div>
  )
}

export default Comment
