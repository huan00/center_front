import React, { useEffect, useState } from 'react'
import { getYoutube } from '../../../services/Api'

const Distraction = ({
  postSurveyResult,
  setSurvey,
  survey,
  handleDistraction
}) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideo()
    if (survey.activity) {
      postSurveyResult()
    }
    return () => {
      setSurvey(null)
    }
  }, [])

  const getVideo = async () => {
    const video = await getYoutube()

    setVideos(video.data.items)
  }

  return (
    <div className="distraction container">
      {videos ? (
        <div className="distraction-video">
          {videos.map((video, idx) => (
            <iframe
              title="idx"
              key={idx}
              className="videos"
              width="320px"
              height="240px"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ))}

          <div className="distraction-btn" onClick={handleDistraction}>
            Done
          </div>
        </div>
      ) : (
        <div className="container">Loading</div>
      )}
    </div>
  )
}

export default Distraction
