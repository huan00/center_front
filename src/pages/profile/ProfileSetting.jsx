import React, { useEffect, useState } from 'react'
import { getUserDetails, updateUserInfo } from '../../services/User-service'

const ProfileSetting = ({ user }) => {
  const [userInfo, setUserInfo] = useState('')
  const [updateUser, setUpdateUser] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    password: ''
  })
  const [password, setPassword] = useState('')

  useEffect(() => {
    getUserById(user.id)
  }, [])

  console.log(user.id)
  const getUserById = async (id) => {
    const userDetail = await getUserDetails(id)
    setUserInfo(userDetail)
    setUpdateUser({
      firstName: userDetail.firstName,
      lastName: userDetail.lastName,
      email: userDetail.email,
      password: ''
    })
  }

  console.log(userInfo)
  console.log(updateUser)

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
    } else {
      console.log(updateUser.password)
      console.log(password.password)
      alert('password does not match')
    }
  }
  console.log(password)

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
            required
            name="password"
            type="text"
            id="newPassword"
            placeholder=""
          />

          <label htmlFor="newPassword2">Confirm New Password</label>
          <input
            required
            onChange={handlePassword}
            name="password"
            type="text"
            id="newPassword2"
            placeholder=""
          />
        </section>
        <div className="setting-btn">
          <button>Delete</button>
          <button onClick={handleUpdate}>Update</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileSetting
