import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoCreateOutline } from 'react-icons/io5'
import InfoCard from '../../components/InfoCard'
import ReplyMsg from '../../components/ReplyMsg'
import {
  getComments,
  getMessageDetailById
} from '../../services/Message-service'

const Conversation = () => {
  const [message, setMessage] = useState('')
  const [comments, setComments] = useState('')
  const { id } = useParams()

  useEffect(() => {
    getMessageDetail(id)
  }, [])

  const getMessageDetail = async (id) => {
    const msg = await getMessageDetailById(id)
    setMessage(msg)

    const comment = await getComments(id)
    setComments(comment.commentMsg)
  }

  return (
    <div className="container convesation">
      <div className="conversation-compose">
        <Link to={`comment/${message.id}`}>
          <IoCreateOutline className="chat-write" />
        </Link>
      </div>
      <div>
        {message && (
          <InfoCard
            all={message}
            user={message.User.firstName}
            message={message.message}
            posted={new Date(message.createdAt).toDateString()}
            commentCount={comments.length}
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
              />
            ))}
      </div>
    </div>
  )
}

export default Conversation
