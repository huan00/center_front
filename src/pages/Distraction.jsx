import React, { useEffect, useState } from 'react'
import { getYoutube } from '../services/Api'
import { Link } from 'react-router-dom'

const Distraction = ({ postSurveyResult, setSurvey, survey }) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideo()
    if (survey.activity) {
      postSurveyResult()
    }
    return () => {
      setSurvey(null)
    }
  })

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
          <Link to="/activity">
            <div className="distraction-btn">Done</div>
          </Link>
        </div>
      ) : (
        <div className="container">Loading</div>
      )}
    </div>
  )
}

export default Distraction
