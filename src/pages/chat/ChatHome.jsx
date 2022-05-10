import React from 'react'
import InfoCard from '../../components/InfoCard'
import { IoCreateOutline } from 'react-icons/io5'

const ChatHome = () => {
  return (
    <div className="container">
      <div className="chat-sort-form">
        <form>
          <select name="" id="">
            <option value="recent">most recent</option>
            <option value="">Top Likes</option>
            <option value="">Oldest</option>
          </select>
          <select name="" id="">
            <option value="all">All</option>
            <option value="sad">Sad</option>
            <option value="happy">Happy</option>
            <option value="anger">Anger</option>
            <option value="nervous">Nervous</option>
            <option value="loved">Loved</option>
            <option value="Anxious">Anxious</option>
          </select>
        </form>
        <IoCreateOutline className="chat-write" />
      </div>
      <div className="chat-content">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  )
}

export default ChatHome
