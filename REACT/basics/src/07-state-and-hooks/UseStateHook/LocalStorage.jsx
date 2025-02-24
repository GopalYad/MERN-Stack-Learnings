import React, { useEffect, useState } from 'react'

const LocalStorage = () => {
    const[item,setItem]=useState(()=>{
        const savedItem=localStorage.getItem("name")
        return savedItem?JSON.parse(savedItem):''
    })
const handleLocalStorage=(event)=>{
    setItem(event.target.value)
}
useEffect(()=>{
    localStorage.setItem('name' ,JSON.stringify(item))
},[item])
const handleClear =()=>{
    setItem("")
}
  return (
    <div>
      <input type="text" name='name' value={item} onChange={handleLocalStorage} placeholder='Enter here....' />
      <button onClick={handleClear}>Clear localStorage</button>
    </div>
  )
}

export default LocalStorage
