import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
    const counter=()=>setCount(count+1)
  return (
    <div>
      <section>
        <h1>{count}</h1>
        <button onClick={counter}>+</button>
      </section>
    </div>
  )
}

export default Counter
