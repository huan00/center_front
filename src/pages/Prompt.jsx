import React, { useState, useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { postSurvey } from '../services/survey-service'

const Prompt = ({ setSurvey, survey }) => {
  const [message, setMessage] = useState([
    'Oh no, why?',
    "Awesome that's great to hear!"
  ])
  const [answer, setAnswer] = useState([
    'Parsonal',
    'Work',
    'Life',
    'Family',
    'Not Sure'
  ])

  const handleClick = (ans) => {
    setSurvey({ ...survey, reason: ans })
  }

  useEffect(() => {}, [])
  return (
    <div className="prompt">
      <div className="prompt-message">
        {survey.moodId === '2' || survey.moodId === '4' ? (
          <h1>{message[1]}</h1>
        ) : (
          <h1>{message[0]}</h1>
        )}
      </div>
      <div className="prompt-selection">
        {answer.map((ans, idx) => (
          <div key={idx} className="prompt-selection-ans">
            <Link to="activity" onClick={() => handleClick(ans)}>
              <p>{ans}</p>
            </Link>
            <BsArrowRight className="prompt-arrow" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Prompt
