import React, { useContext } from 'react'
import { Context } from './ExampleOne'
const ExampleTwo = () => {
    const value = useContext(Context)
  return (
    <div>
      {value.counter}
      <button onClick={()=>value.setCounter(prev=>prev+1)}>increament</button>
    </div>
  )
}

export default ExampleTwo
