import React from 'react'

const MessageInput = ({ handleMessage, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="msg">What on your mind</label>
        <textarea id="msg" name="message" onChange={handleMessage}></textarea>
        <button>submit</button>
      </form>
    </div>
  )
}

export default MessageInput
