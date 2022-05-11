import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faThumbtack,
  faEllipsisVertical,
  faEye,
  faCrown
} from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import '../styles/component.css'
import profile from '../assets/images/profile.svg'
import { Link } from 'react-router-dom'

const InfoCard = ({
  mood,
  message,
  user,
  all,
  posted,
  commentCount,
  moodEmoji
}) => {
  const [username, setUsername] = useState(user)
  const [filter, setFilter] = useState('')

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
                : 'General'}
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
          <Link to="">
            <div className="social-icon">
              <span className="spanHeart">0</span>
              <FontAwesomeIcon className="faHeart" icon={faHeart} />
            </div>
          </Link>
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
