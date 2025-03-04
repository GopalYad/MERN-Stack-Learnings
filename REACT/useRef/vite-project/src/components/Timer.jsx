import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const refValue = useRef(null)
    const[counter,setCounter]=useState(0)
    useEffect(()=>{
        refValue.current=setInterval(()=>{
        setCounter(prev=>prev+1)
        },1000)
        return ()=>{
            clearInterval(refValue.current)
        }
    },[])
    const handleStop=()=>{
      clearInterval(refValue.current)
    }
  return (
    <div>
      <h1>Timer :{counter.toFixed(2)}</h1>
      <button onClick={handleStop}>Stop Timer</button>
    </div>
  )
}

export default Timer
