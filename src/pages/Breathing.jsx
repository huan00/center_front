import React, { useState } from 'react'
import Timer from '../components/Timer'
import { useNavigate } from 'react-router-dom'

const Breathing = () => {
  let naviage = useNavigate()
  const [breathing, setBreathing] = useState(['inhale', 'exhale'])
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const [breathTimer, setBreathTimer] = useState(3)
  const [timeTracker, setTimeTracker] = useState()

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
          <button>Done</button>
        </>
      )}
    </div>
  )
}

export default Breathing
