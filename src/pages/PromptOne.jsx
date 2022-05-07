import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const PromptOne = () => {
  const [message, setMessage] = useState('Oh no, why?')
  const [answer, setAnswer] = useState([
    'Parsonal',
    'Work',
    'Life',
    'Family',
    'Not Sure'
  ])
  return (
    <div>
      <div>
        <h1>{message}</h1>
      </div>
      <div>
        {answer.map((ans, idx) => (
          <div key={idx}>
            {ans}
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PromptOne
