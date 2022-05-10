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

const InfoCard = ({ mood, message, user, all, posted }) => {
  const [username, setUsername] = useState(user)
  const [filter, setFilter] = useState('')

  return (
    <div className="infoCard">
      <div className="infoCard-title">
        <img src={profile} alt="" />
        <h4>
          {username} <FontAwesomeIcon icon={faCrown} />
        </h4>
        <FontAwesomeIcon className="thumbTack" icon={faThumbtack} />
        <FontAwesomeIcon className="ellispsisVert" icon={faEllipsisVertical} />
      </div>
      <Link to={`/chat/conversation/${all.id}`}>
        <div className="infoCard-content">
          <h4>{all.messageMood[0] ? all.messageMood[0].mood : 'General'}</h4>
          <p>{message}</p>
        </div>
      </Link>
      <div className="infoCard-social">
        <FontAwesomeIcon className="faEye" icon={faEye} />
        <span>0</span>
        <Link to={`/conversation/${all.id}`}>
          <FontAwesomeIcon className="faComment" icon={faComment} />
          <span>0</span>
        </Link>
        <span className="spanHeart">0</span>
        <FontAwesomeIcon className="faHeart" icon={faHeart} />
      </div>
      <hr></hr>
      <div className="infoCard-footer">
        <p>Posted on: {posted}</p>
      </div>
    </div>
  )
}

export default InfoCard
