import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Activity = ({
  survey,
  setSurvey,
  postSurveyResult,
  handleActPage,
  desktop
}) => {
  const [message] = useState(
    "Let's help with that. Pick something that you have a moment for right now"
  )
  const [answer] = useState([
    'Breathing',
    'Distraction',
    'Logit',
    'Not right now'
  ])

  return (
    <div className="prompt">
      {survey.moodId === '2' || survey.moodId === '5' ? (
        <div className="prompt-happy">
          <p>So good to hear you are having a good day.</p>
          <div className="prompt-happy-video">
            <p>Watch some video?</p>
            <div onClick={() => handleActPage(answer[1])}>
              <p>Vides</p>
              <BsArrowRight />
            </div>
          </div>
          <p>Or</p>
          {desktop ? (
            <button className="btn" onClick={() => handleActPage(answer[3])}>
              Done
            </button>
          ) : (
            <Link
              to="/activity"
              onClick={() => {
                setSurvey({ ...survey, activity: 'Not right now' })
                postSurveyResult()
              }}
            >
              <div
                className="prompt-happy-center"
                onClick={() => handleActPage(answer[3])}
              >
                <p>History center</p>
                <BsArrowRight />
              </div>
            </Link>
          )}
        </div>
      ) : (
        <>
          <div className="prompt-message">{message}</div>
          <div className="prompt-selection">
            {answer.map((ans, idx) =>
              idx < answer.length - 1 ? (
                <div
                  className="prompt-selection-ans"
                  onClick={() => handleActPage(ans)}
                >
                  <p>{ans}</p>
                  <BsArrowRight />
                </div>
              ) : (
                <div
                  className="prompt-selection-ans"
                  key={idx}
                  onClick={() => handleActPage(ans)}
                >
                  <p>{ans}</p>
                  <BsArrowRight />
                </div>
              )
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Activity
