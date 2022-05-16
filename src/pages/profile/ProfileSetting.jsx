import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getUserDetails,
  updateUserInfo,
  deleteUser
} from '../../services/User-service'

const ProfileSetting = ({ user }) => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState('')
  const [updateUser, setUpdateUser] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    password: ''
  })
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('password')

  useEffect(() => {
    getUserById(user.id)
  }, [])

  const getUserById = async (id) => {
    const userDetail = await getUserDetails(id)
    setUserInfo(userDetail)
    setUpdateUser({
      firstName: userDetail.firstName,
      lastName: userDetail.lastName,
      email: userDetail.email,
      password: ''
    })
    setPassword('')
  }

  const handleChange = (e) => {
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })
  }
  const handlePassword = (e) => {
    setPassword({ [e.target.name]: e.target.value })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    if (updateUser.password === password.password) {
      const updated = await updateUserInfo(user.id, updateUser)
      getUserById(user.id)
      setCheckPassword('Updated!')
      return
    } else if (updateUser.password !== password.password) {
      setUpdateUser({ ...updateUser, password: '' })
      setPassword('')
      setCheckPassword('Password does not match!!')
      return
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    await deleteUser(user.id)
    localStorage.clear()
    navigate('/')
  }

  return (
    <div className="container">
      <div className="setting-title">Your Settings</div>
      <form className="setting-form">
        <section className="setting-inputs">
          <label htmlFor="firstName">First Name</label>
          <input
            disabled
            name="firstName"
            type="text"
            id="firstName"
            placeholder={userInfo.firstName}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            disabled
            name="lastName"
            type="text"
            id="lastName"
            placeholder={userInfo.lastName}
          />

          <label htmlFor="email">Email</label>
          <input
            disabled
            name="email"
            type="text"
            id="email"
            placeholder={userInfo.email}
          />

          <label htmlFor="password">Password</label>
          <input
            disabled
            type="password"
            id="password"
            placeholder="***********"
          />

          <label htmlFor="newPassword">New Password</label>
          <input
            onChange={handleChange}
            value={updateUser.password}
            name="password"
            type="password"
            id="newPassword"
            placeholder={checkPassword}
          />

          <label htmlFor="newPassword2">Confirm New Password</label>
          <input
            onChange={handlePassword}
            value={password.password}
            name="password"
            type="password"
            id="newPassword2"
            placeholder={checkPassword}
          />
        </section>
        <div className="setting-btn">
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleUpdate}>Update</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileSetting
