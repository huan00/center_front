import React, { useEffect, useState } from 'react'
import InfoCard from '../../components/InfoCard'
import SelectEmotion from '../../components/SelectEmotion'
import { IoCreateOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { getAllMessageChat } from '../../services/Message-service'
import { render } from '@testing-library/react'

const ChatHome = () => {
  const [messages, setMessages] = useState([])
  const [sortRecent, setSortRecent] = useState('most recent')
  const [sortEmotion, setEmotion] = useState('')
  const [filterArray, setFilterArray] = useState()

  useEffect(() => {
    getMessages()
  }, [])

  const toggleSortRecent = () => {
    sortRecent === 'most recent'
      ? setSortRecent('oldest')
      : setSortRecent('most recent')
  }

  const getMessages = async () => {
    const msg = await getAllMessageChat()
    setMessages(msg)
  }

  console.log(filterArray)

  return (
    <div className="container">
      <div className="chat-sort-form">
        <form>
          <select
            name="sortRecent"
            id=""
            onChange={(e) => setSortRecent(e.target.value)}
          >
            <option value="recent">most recent</option>
            <option value="">Top Likes</option>
            <option value="">oldest</option>
          </select>
        </form>
        <SelectEmotion />
        <Link to="compose">
          <IoCreateOutline className="chat-write" />
        </Link>
      </div>
      <div className="chat-content">
        {messages.map((message) => (
          <InfoCard
            user={message.User.email}
            message={message.message}
            all={message}
          />
        ))}
      </div>
    </div>
  )
}

export default ChatHome
