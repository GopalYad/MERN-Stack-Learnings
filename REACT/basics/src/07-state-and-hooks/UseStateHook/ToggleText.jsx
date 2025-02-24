import React, { useState } from 'react'

const ToggleText = () => {
    const[isVisible,setIsvisible]=useState(true)
  return (
    <div>
      <button onClick={()=>setIsvisible(!isVisible)}>
        {isVisible?'Hide':'Show'}Text
      </button>
      {isVisible && <p>This is a toggled text!</p>}
    </div>
  )
}

export default ToggleText
