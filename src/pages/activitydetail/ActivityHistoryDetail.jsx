import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ActivityDetail from '../../components/ActivityDetail'

const ActivityHistoryDetail = ({ user }) => {
  const { id } = useParams()

  return <div>{user && <ActivityDetail user={user} id={id} />}</div>
}

export default ActivityHistoryDetail
