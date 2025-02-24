// Exercise 1: Counter App
// Create a simple counter app that:

// Increments and decrements the count.
// Has a reset button to set the count back to zero.
import React, { useState } from "react";

const SetPractise = ()=>{
    const[counter,setCounter]=useState(0)
    return(
        <div>
       <h1>{counter}</h1>
       <button onClick={()=>setCounter(counter+1)}>+</button>
       <button onClick={()=>setCounter(counter-1)}>-</button>
       <button onClick={()=>setCounter(0)}>Reset</button>
       </div>
    )
}

export default SetPractise