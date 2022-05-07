import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Mood = ({ slider, mood, handleConfirmMood }) => {
  return (
    <div className="mood">
      <div className="mood-content" onClick={handleConfirmMood}>
        <span className="mood-icon">{mood[slider]}</span>
      </div>
      <p>Tab to confirm</p>
    </div>
  )
}

export default Mood
