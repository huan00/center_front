import { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { updateLike } from '../services/Like-service'
import '../styles/App.css'

const ReplyMsg = ({
  message,
  createdAt,
  username,
  commentId,
  comment,
  id,
  getMessageDetail
}) => {
  const [likes, setLikes] = useState({
    messageId: commentId,
    rating: 1
  })

  const handleLikes = async () => {
    const res = await updateLike(likes)
    getMessageDetail(id)
  }
  return (
    <div className="reply-card">
      <div className="reply-card-content">
        <div className="reply-card-title">{username}</div>
        <div className="reply-card-message">
          <p>{message}</p>
        </div>

        <div className="reply-card-misc">
          <div className="reply-date">
            <p>{createdAt}</p>
          </div>
          <div className="reply-card-social" onClick={handleLikes}>
            <span className="spanHeart">
              {comment.Ratings[0] ? comment.Ratings[0].rating : '0'}
            </span>
            {comment.Ratings[0] ? (
              <AiFillHeart className="aiHeart" style={{ color: 'red' }} />
            ) : (
              <AiFillHeart className="aiHeart" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReplyMsg
