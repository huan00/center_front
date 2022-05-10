import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { postSurvey } from '../services/survey-service'

const PromptActivity = ({ survey, setSurvey }) => {
  const [message, setMessage] = useState(
    'Let’s help with that. Pick something that you have a moment for right now'
  )
  const [answer, setAnswer] = useState([
    'Breathing',
    'Distraction',
    'Logit',
    'Not right now'
  ])

  useEffect(() => {}, [])

  return (
    <div className="prompt">
      {survey.moodId === '2' || survey.moodId === '4' ? (
        <div>
          <p>what would you like to do?</p>
          <button>Done</button>
        </div>
      ) : (
        <>
          <div className="prompt-message">{message}</div>
          <div className="prompt-selection">
            {answer.map((ans, idx) => (
              <div className="prompt-selection-ans" key={idx}>
                <Link
                  to={ans}
                  onClick={() => setSurvey({ ...survey, activity: ans })}
                >
                  <p>{ans}</p>
                  <BsArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default PromptActivity
