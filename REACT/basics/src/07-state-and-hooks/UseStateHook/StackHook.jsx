import React, { useState } from 'react'

const StackHook = () => {
    const[profile,setProfile]=useState({
        name:'',
        age:'',
        address:'',
        contact:'',
        married:'',
        occupation:'',
    })
   
    const[data,setData]=useState([]);
    const handleClick=(event)=>{
        const{name,value}=event.target;
        setProfile((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const submitbtn=(event)=>{
        event.preventDefault();
        setData([...data,profile])
        setProfile({ name: '', age: '', address: '', contact: '', married: '', occupation: '' });
        console.log(data)
    }
   
  return (
    <div>

        <form onSubmit={submitbtn}>
       
     <label >
        <input type="text" name='name' value={profile.name} onChange={handleClick} placeholder='Enter name here...' />
     </label>
     
     <label >
        <input type="text" name='age' value={profile.age} onChange={handleClick} placeholder='Enter age here...' />
     </label>
     <label >
        <input type="text" name='address' value={profile.address} onChange={handleClick} placeholder='Enter address here...' />
     </label>
     <label >
        <input type="text" name='contact' value={profile.contact} onChange={handleClick} placeholder='Enter contact here...' />
     </label>
     <label >
        <input type="text" name='married' value={profile.married} onChange={handleClick} placeholder='Enter married here...' />
     </label>
     <label >
        <input type="text" name='occupation' value={profile.occupation} onChange={handleClick} placeholder='Enter occupation here...' />
     </label>
    
    <div>
        <button type='submit' >Submit</button>
    </div>
    </form>
    </div>
  )
}

export default StackHook
