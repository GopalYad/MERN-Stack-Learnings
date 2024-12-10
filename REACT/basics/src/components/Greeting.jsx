import React from 'react'
const message = 'Good Evening!'
const date = new Date();
const Greeting = () => {
  return (
    <div>
      <h1>{message}</h1>
      <p>Today's Date :{date.getDate()}</p>
    </div>
  )
}

export default Greeting
