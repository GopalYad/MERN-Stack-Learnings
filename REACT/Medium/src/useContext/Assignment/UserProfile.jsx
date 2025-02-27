import React, { useContext } from 'react'
import { UserProvider } from './UserContext'
const UserProfile = () => {
    const name = useContext(UserProvider)
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default UserProfile
