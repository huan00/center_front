import React from 'react'
import Cause from '../../components/promptPages/Cause'
import { useNavigate } from 'react-router-dom'

export const PromptPageTwo = ({ survey, setSurvey }) => {
  const navigate = useNavigate()

  const handleCause = (ans) => {
    setSurvey({ ...survey, reason: ans })
    navigate('/survey/cause/activity')
  }
  return (
    <div className="container">
      <Cause survey={survey} handleCause={handleCause} />
    </div>
  )
}
