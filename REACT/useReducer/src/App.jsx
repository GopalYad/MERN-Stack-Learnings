import React, { useRef, useState } from 'react'

const App = () => {
  return (
    <div>
      <Counter/>
      <StopWatch/>
    </div>
  )
}

export default App


const Counter =()=>{
  //useRef usee to refeerence a value that' not used for rendering
  let ref = useRef(0)
  const handleClick=()=>{
    ref.current=ref.current+1
    alert('You clicked '+ref.current+' times')
  }

  return(
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

const StopWatch =()=>{
  const[startTime ,setStartTime]=useState(null)
  const[now ,setNow]=useState(null)
  const intervalRef =useRef(null)
  const handleStart=()=>{
    setStartTime(Date.now())
    setNow(Date.now())
    clearInterval(intervalRef.current)
    intervalRef.current=setInterval(()=>{
      setNow(Date.now())
    },10  )
  }
  const handleStop=()=>{
    clearInterval(intervalRef.current)
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return(
    <div>
    <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
     <button onClick={handleStart}>start</button>
     <button onClick={handleStop}>stop</button>
    </div>
  )
}