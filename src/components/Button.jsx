import React from 'react'

const Button = () => {
  const [btnTxt] = useState('done')
  return (
    <div>
      <button>{btnTxt}</button>
    </div>
  )
}

export default Button
