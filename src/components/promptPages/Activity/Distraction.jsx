import React, { useEffect, useState } from 'react'
import { getYoutube } from '../../../services/Api'

const Distraction = ({
  postSurveyResult,
  setSurvey,
  survey,
  handleDistraction
}) => {
  const [videos, setVideos] = useState([])
  const [channel, setChannel] = useState('UCYPrd7A27nLhQONcCIfFTaA&')
  const [channelData, setChangeData] = useState([
    'UCYPrd7A27nLhQONcCIfFTaA',
    'UC_zEzzq54Rm0iy7lmmZbCIg',
    'UCbpIb7eGuCVFPfX6U-6z1Og'
  ])

  // UC_zEzzq54Rm0iy7lmmZbCIg  AFV
  // UC-9-kyTW8ZkZNDHQJ6FgpwQ Music

  useEffect(() => {
    getVideo(channelData[0])
    if (survey.activity) {
      postSurveyResult()
    }
    return () => {
      setSurvey(null)
    }
  }, [])

  const getVideo = async (channel) => {
    const video = await getYoutube(channel)

    setVideos(video.data.items)
  }

  return (
    <div className="distraction container">
      <div className="video-btn">
        <button onClick={() => getVideo(channelData[0])}>Cat</button>
        <button onClick={() => getVideo(channelData[1])}>AFV</button>
        <button onClick={() => getVideo(channelData[2])}>Music</button>
      </div>
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
