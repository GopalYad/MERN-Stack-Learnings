import React, { useRef } from 'react'
import Timer from './Timer'
const FocusInput = () => {
    const focusRef =useRef(null)
    const handleInput=()=>{
        focusRef.current.focus()
    }
  return (
    <div>
     <input type="text" ref={focusRef} />
     <button onClick={()=>handleInput()}>Focus Input</button>
     <Timer/>
    </div>
  )
}

export default FocusInput
