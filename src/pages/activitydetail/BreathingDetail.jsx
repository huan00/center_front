import React, { useEffect, useState } from 'react'
import ActivityDetail from '../../components/ActivityDetail'

const BreathingDetail = ({ user }) => {
  return <div>{user && <ActivityDetail user={user} />}</div>
}

export default BreathingDetail
