import React, { useEffect, useState } from 'react'

const UseStateCallback = () => {
    //passing function into useState as initail value
    const[count ,setCount]=useState(()=>{
        const initalCount=0;
        return initalCount;
    })
    const increament =()=>{
        setCount((prevCount)=>prevCount+1);
    }

    const[randomNumber,setRandomNumber]=useState(()=>{
       return Math.floor(Math.random()*100)
    })
    const newNumber=()=>setRandomNumber(Math.floor(Math.random()*100))


    const[name,setName]=useState(()=>{
        const savedName = localStorage.getItem("name");
        return savedName?JSON.parse(savedName):"";
    })
    const onchangeHandler =(event)=>{
      setName(event.target.value)
    }
   
    useEffect(()=>{
        localStorage.setItem('name',JSON.stringify(name))
    },[name])
    const clearName =()=>setName("")
  return (
    <div>
      <section>
        <h1>{count}</h1>
        <button onClick={increament}>Increament</button>
      </section>
      <section>
        <h1>Random Number : {randomNumber}</h1>
        <button onClick={newNumber}>Generate Number</button>
      </section>

      <section>
        <h1>{name}</h1>
        <input type="text" 
        value={name} 
        onChange={onchangeHandler} 
        placeholder='enter name here' 
        />
        <button onClick={clearName}>Remove Name</button>
      </section>
    </div>
  )
}

export default UseStateCallback
