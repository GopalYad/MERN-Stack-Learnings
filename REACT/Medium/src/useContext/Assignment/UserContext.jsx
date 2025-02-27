import React, { useState } from 'react'
import { createContext } from 'react'
import UserProfile from './UserProfile'
import UpdateUser from './UpdateUser'
export const UserProvider = createContext()
const UserContext = () => {
    const[name,setName]=useState('Gopal')
  return (
    <div>
      <UserProvider.Provider value={{name,setName}} >
        <UpdateUser/>
      </UserProvider.Provider>
    </div>
  )
}

export default UserContext


