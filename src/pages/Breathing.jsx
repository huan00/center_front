import React, { useEffect, useState } from 'react'
import Timer from '../components/Timer'
import { useNavigate, Link } from 'react-router-dom'

const Breathing = ({ postSurveyResult, setSurvey, survey, user }) => {
  let naviage = useNavigate()
  const [breathing, setBreathing] = useState(['inhale', 'exhale'])
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const [breathTimer, setBreathTimer] = useState(3)
  const [timeTracker, setTimeTracker] = useState()

  useEffect(() => {
    postSurveyResult()
  }, [])

  return (
    <div className="breath">
      {minutes > 0 || seconds > 0 ? (
        <>
          <div className="breath-msg">
            <div>{breathing[0]} </div>
            <div>{breathing[1]}</div>
            <div className="breath-bg"></div>
          </div>
          <div className="breath-timer">
            <Timer
              minutes={minutes}
              seconds={seconds}
              setSeconds={setSeconds}
              setMinutes={setMinutes}
            />
          </div>
        </>
      ) : (
        <>
          <p>Done!</p>
          <p>Awesome Job</p>
          <p>Let enjoy the rest of the day!</p>
          <Link to="/user/activity">
            <button className="btn">Done</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Breathing
