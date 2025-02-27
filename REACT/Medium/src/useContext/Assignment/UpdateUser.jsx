import React, { useContext } from 'react'
import { UserProvider } from './UserContext'
const UpdateUser = () => {
    const value = useContext(UserProvider)
    
  return (
    <div>
      {value.name}
      <button onClick={()=>value.setName((name)=>name==='Gopal'?'Gopal Yadav':'Gopal')}>change name</button>
    </div>
  )
}

export default UpdateUser
