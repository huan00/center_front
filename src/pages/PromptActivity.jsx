import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { postSurvey } from '../services/survey-service'

const PromptActivity = ({ survey, setSurvey, postSurveyResult }) => {
  const [message, setMessage] = useState(
    'Let&apos;s help with that. Pick something that you have a moment for right now'
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
        <div className="prompt-happy">
          <p>So good to hear you are having a good day.</p>
          <div className="prompt-happy-video">
            <p>Watch some video?</p>
            <Link
              to="distraction"
              onClick={() => setSurvey({ ...survey, activity: 'Distraction' })}
            >
              <div>
                <p>Vides</p>
                <BsArrowRight />
              </div>
            </Link>
          </div>
          <p>Or</p>
          <Link
            to="/user/activity"
            onClick={() => {
              setSurvey({ ...survey, activity: 'Not right now' })
              postSurveyResult()
              console.log('hit')
            }}
          >
            <div className="prompt-happy-center">
              <p>History center</p>
              <BsArrowRight />
            </div>
          </Link>
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
