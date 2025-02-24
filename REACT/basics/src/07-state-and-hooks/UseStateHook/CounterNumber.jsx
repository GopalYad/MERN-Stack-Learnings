import React, { useState } from 'react'

const CounterNumber = () => {
  const[count,setCount]=useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)} >Increament</button>
      <button onClick={()=>setCount(count-1)}>Decreament</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default CounterNumber
