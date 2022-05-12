import React, { useEffect, useState } from 'react'
import { getYoutube } from '../services/Api'
import YouTube from 'react-youtube'
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
  }, [])

  const getVideo = async () => {
    const video = await getYoutube()

    setVideos(video.data.items)
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  return (
    <div className="distraction container">
      {videos ? (
        <div className="distraction-video">
          {videos.map((video) => (
            <iframe
              className="videos"
              width="320px"
              height="240px"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameborder="0"
              allowfullscreen
            ></iframe>
          ))}
          <Link to="/activity">
            <div className="distraction-btn">Done</div>
          </Link>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  )
}

export default Distraction
