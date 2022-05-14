import React, { useEffect, useState } from 'react'
import { getUserDetails } from '../../services/User-service'
import SurveyDetail from '../../components/SurveyDetail'
import { useParams } from 'react-router-dom'

const ActivityDetailPage = ({ user, historyLog, handleResetHistoryPage }) => {
  const { id } = useParams()
  const [surveyDetail, setSurveyDetail] = useState()
  const [survey, setSurvey] = useState()
  const log = historyLog ? historyLog : id

  useEffect(() => {
    if (user) {
      getActivityDetail(user.id)
    }
  })

  const getActivityDetail = async (uid) => {
    const detail = await getUserDetails(uid)

    setSurveyDetail(detail)
    setSurvey(
      detail.Surveys.filter((survey) => parseInt(survey.id) === parseInt(log))
    )
  }

  return (
    <div className="container activity-detail-page">
      {surveyDetail && (
        <div className="activity-detail-page-title">
          <p>{surveyDetail.firstName},</p>
          <p>SurveyId: {log}</p>
        </div>
      )}
      {survey && (
        <SurveyDetail
          question={survey[0].question}
          answer={survey[0].answer}
          activity={survey[0].activity}
          reason={survey[0].reason}
          date={new Date(survey[0].createdAt).toDateString()}
        />
      )}
      <button className="btn" onClick={handleResetHistoryPage}>
        Done
      </button>
    </div>
  )
}

export default ActivityDetailPage
