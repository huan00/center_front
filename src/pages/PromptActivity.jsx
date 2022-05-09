import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { postSurvey } from '../services/survey-service'

const PromptActivity = ({ survey }) => {
  const [message, setMessage] = useState(
    'Let’s help with that. Pick something that you have a moment for right now'
  )
  const [answer, setAnswer] = useState([
    'Breathing',
    'Distraction',
    'Logit',
    'Not right now'
  ])

  const postSurveyResult = async (survey) => {
    const res = await postSurvey(survey)
  }

  useEffect(() => {
    postSurveyResult(survey)
  }, [])

  console.log(survey)
  return (
    <div className="prompt">
      <div className="prompt-message">{message}</div>
      <div className="prompt-selection">
        {answer.map((ans, idx) => (
          <div className="prompt-selection-ans" key={idx}>
            <Link to={ans}>
              <p>{ans}</p>
              <BsArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PromptActivity
