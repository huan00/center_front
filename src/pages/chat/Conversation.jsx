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

  console.log(message)

  return (
    <div className="container">
      <div>
        <Link to={`comment/${message.id}`}>
          <IoCreateOutline />
        </Link>
      </div>
      <div>
        {message && (
          <InfoCard
            all={message}
            user={message.User.firstName}
            message={message.message}
            posted={new Date(message.createdAt).toDateString()}
          />
        )}
      </div>
      <div>
        {comments &&
          comments.map((comment) => (
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
