import React, { useEffect } from 'react'

const Timer = ({ minutes, seconds, setMinutes, setSeconds }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds -= 1))
      } else if (seconds === 0 && minutes > 0) {
        setMinutes((minutes -= 1))
        setSeconds((seconds = 59))
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {minutes}:{seconds < 10 ? <>0{seconds}</> : <>{seconds}</>}
    </div>
  )
}

export default Timer
