import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiSend } from 'react-icons/fi'
import InfoCard from '../../components/InfoCard'
import ReplyMsg from '../../components/ReplyMsg'
import {
  getComments,
  getMessageDetailById,
  postComment
} from '../../services/Message-service'

const Conversation = ({ moodEmoji, user }) => {
  const [message, setMessage] = useState('')
  const [comments, setComments] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()
  const [commentData, setCommentData] = useState({
    userId: user.id,
    message: '',
    private: true,
    mood: ''
  })

  useEffect(() => {
    getMessageDetail(id)
  }, [])

  const getMessageDetail = async (id) => {
    const msg = await getMessageDetailById(id)
    setMessage(msg)

    const comment = await getComments(id)
    setComments(comment.commentMsg)

    setCommentData({
      ...commentData,
      mood: msg.messageMood[0].MessageMood.moodId,
      message: ''
    })
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
      ...commentData,
      message: ''
    })
    getMessageDetail(id)
  }

  return (
    <div className="container convesation">
      <div>
        {message && (
          <InfoCard
            all={message}
            user={message.User.firstName}
            message={message.message}
            posted={new Date(message.createdAt).toDateString()}
            commentCount={comments.length}
            moodEmoji={moodEmoji}
            commentId={message.id}
          />
        )}
      </div>
      <div className="conversation-comment">
        {comments &&
          comments
            .sort((a, b) => b.id - a.id)
            .map((comment) => (
              <ReplyMsg
                key={comment.id}
                message={comment.message}
                username={comment.User.firstName}
                createdAt={new Date(comment.createdAt).toDateString()}
                commentId={comment.id}
                comment={comment}
                id={id}
                getMessageDetail={getMessageDetail}
              />
            ))}
      </div>
      <div className="chat-compose-input">
        <input
          onChange={handleChange}
          type="text"
          value={commentData.message}
          name="message"
          id="message"
          placeholder="Type a thought"
        />
        <div className="chat-send">
          <FiSend onClick={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default Conversation
