import { useState } from 'react'

const Mood = ({ slider, moodEmoji, handleConfirmMood }) => {
  return (
    <div className="mood">
      {slider > 0 && (
        <>
          <div className="mood-content" onClick={handleConfirmMood}>
            <span className="mood-icon">{moodEmoji[slider]}</span>
          </div>
          <p>Tab to confirm</p>
        </>
      )}
    </div>
  )
}

export default Mood
