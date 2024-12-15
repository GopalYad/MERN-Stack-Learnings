import React from 'react'
import { useState } from 'react'
const StateHooksApp = () => {
  const [count,setCount] = useState(0)
  console.log(count)
  const increment = ()=> setCount(count+1)
  const decrement =()=>setCount(count-1)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default StateHooksApp
