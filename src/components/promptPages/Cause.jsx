import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Cause = ({ survey, handleCause }) => {
  const [message] = useState(['Oh no, why?', "Awesome that's great to hear!"])
  const [answer] = useState(['Parsonal', 'Work', 'Life', 'Family', 'Not Sure'])

  return (
    <div className="prompt">
      <div className="prompt-message">
        {survey.moodId === '2' || survey.moodId === '5' ? (
          <h1>{message[1]}</h1>
        ) : (
          <h1>{message[0]}</h1>
        )}
      </div>
      <div className="prompt-selection">
        {answer.map((ans, idx) => (
          <div
            key={idx}
            className="prompt-selection-ans"
            onClick={() => handleCause(ans)}
          >
            <p>{ans}</p>
            <BsArrowRight className="prompt-arrow" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cause
