import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ActivityDetail from '../../components/ActivityDetail'

const ActivityHistoryDetail = ({ user, category, handleSelectLog }) => {
  const { id } = useParams()
  const cate = category ? category : id

  return (
    <div>
      {user && (
        <ActivityDetail
          user={user}
          id={cate}
          handleSelectLog={handleSelectLog}
        />
      )}
    </div>
  )
}

export default ActivityHistoryDetail
