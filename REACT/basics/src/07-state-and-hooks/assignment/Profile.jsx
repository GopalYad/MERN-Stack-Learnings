import React, { useState } from 'react'

const Profile = () => {
  const[profile,setProfile]=useState({
    name:'',
    age :''
  })
  const addInformation=(event)=>{
    const{name,value}=event.target
   setProfile((prev)=>(
    {
      ...prev,
      [name]:value,
    }
   ))
  }
  return (
    <div>
      <label > 
        <input type="text" name='name' value={profile.name} onChange={addInformation} placeholder='enter name here....' />
      </label>
      
      <label > 
        <input type="text" name='age' value={profile.age} onChange={addInformation} placeholder='enter name here....' />
      </label>
      
      {/* <button onClick={addInformation}>addInformation</button> */}
      <h1>{profile.name}</h1>
      <h1>{profile.age}</h1>
    </div>
  )
}

export default Profile
