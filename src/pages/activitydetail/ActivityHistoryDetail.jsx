import { useParams } from 'react-router-dom'
import ActivityDetail from '../../components/ActivityDetail'

const ActivityHistoryDetail = ({
  user,
  category,
  handleSelectLog,
  handleSelfMessage
}) => {
  const { id } = useParams()
  const cate = category ? category : id

  return (
    <div>
      {user && (
        <ActivityDetail
          user={user}
          id={cate}
          handleSelectLog={handleSelectLog}
          handleSelfMessage={handleSelfMessage}
        />
      )}
    </div>
  )
}

export default ActivityHistoryDetail
