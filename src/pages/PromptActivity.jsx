import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const PromptActivity = ({ survey, setSurvey, postSurveyResult }) => {
  const [message, setMessage] = useState(
    "Let's help with that. Pick something that you have a moment for right now"
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
      {survey.moodId === '2' || survey.moodId === '5' ? (
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
            to="/activity"
            onClick={() => {
              setSurvey({ ...survey, activity: 'Not right now' })
              postSurveyResult()
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
            {answer.map((ans, idx) =>
              idx < answer.length - 1 ? (
                <Link
                  to={ans}
                  onClick={() => setSurvey({ ...survey, activity: ans })}
                >
                  <div className="prompt-selection-ans" key={idx}>
                    <p>{ans}</p>
                    <BsArrowRight />
                  </div>
                </Link>
              ) : (
                <Link
                  to="/activity"
                  onClick={() => setSurvey({ ...survey, activity: ans })}
                >
                  <div className="prompt-selection-ans" key={idx}>
                    <p>{ans}</p>
                    <BsArrowRight />
                  </div>
                </Link>
              )
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default PromptActivity
