import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { AiFillHeart } from 'react-icons/ai'
import '../styles/App.css'
import { Link } from 'react-router-dom'
import { updateLike } from '../services/Like-service'

const InfoCard = ({
  message,
  user,
  all,
  posted,
  commentCount,
  moodEmoji,
  getMessages
}) => {
  const [username] = useState(user)
  const [likes] = useState({
    messageId: all.id,
    rating: 1
  })

  const handleLikes = async () => {
    await updateLike(likes)
    getMessages()
  }

  return (
    <div className="infoCard">
      <div className="infoCard-container">
        <div className="infoCard-title">
          {/* <img src={profile} alt="" /> */}
          <h4>{username}</h4>
        </div>
        <Link to={`/chat/conversation/${all.id}`}>
          <div className="infoCard-content">
            <p>{message}</p>
            <div className="infocard-chat-emoji">
              {all.messageMood[0]
                ? moodEmoji[all.messageMood[0].MessageMood.moodId]
                : '🤯'}
            </div>
          </div>
        </Link>
        <div className="infoCard-social">
          <Link to={`/chat/conversation/${all.id}`}>
            <div className="social-icon">
              <FontAwesomeIcon className="faComment" icon={faComment} />
              <span>{commentCount}</span>
            </div>
          </Link>

          <div className="social-icon" onClick={handleLikes}>
            <span className="spanHeart">
              {all.Ratings[0] ? all.Ratings[0].rating : '0'}
            </span>
            {all.Ratings[0] ? (
              <AiFillHeart style={{ color: 'red' }} className="aiHeart" />
            ) : (
              <AiFillHeart className="aiHeart" />
            )}
          </div>
        </div>
        <hr></hr>
        <div className="infoCard-footer">
          <p>{posted}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
