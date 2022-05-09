import React from 'react'
import Button from '../components/Button'

const Excise = () => {
  const [excise, setExcise] = useState(['Inhale', 'Exhale'])
  const [timer, setTimer] = useState()
  const [bgStyle, setBgStyle] = useState(1 / timer)

  return (
    <div>
      <div style={{ backgroundColor: bgStyle }}>
        <p>{excise[0]}</p>
        <p>{excise[1]}</p>
        {timer === 0 ? <Button /> : <p>{timer}</p>}
      </div>
    </div>
  )
}

export default Excise
