import React, { useContext } from 'react'
import { ContextOne } from './ExampleOne'
const Profile = () => {
    const value =useContext(ContextOne)
    const onClick=()=>{
        value.setData([...value.input,data])
    }
  return (
    <div>
      <input type="text" name="name" value={value.input} onChange={()=>value.setInput(e.target.value)}/>
      <button onClick={onClick}>add</button>
    </div>
  )
}

export default Profile
