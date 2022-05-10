import React, { useState } from 'react'

const MessageInput = ({ handleMessage, handleSubmit }) => {
  return (
    <div className="message-input">
      <form onSubmit={handleSubmit}>
        <label htmlFor="msg">What on your mind?</label>
        <textarea id="msg" name="message" onChange={handleMessage}></textarea>
        <button>submit</button>
      </form>
    </div>
  )
}

export default MessageInput
