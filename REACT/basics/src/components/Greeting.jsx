import React from 'react'
const Greeting = () => {
  const date = new Date();
  const message = 'Good Evening!'
  return (
    <div>
      <h1>{message}</h1>
    <p>Today's Date :{date.getDate()},Time:{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
    </div>
  )
}

export default Greeting
