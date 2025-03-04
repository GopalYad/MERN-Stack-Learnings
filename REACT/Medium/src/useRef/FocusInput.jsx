import React from 'react'
import { useRef } from 'react'
import Timer from './Timer'
const FocusInput = () => {
    const use = useRef(null)

    const focusIn =()=>{
        if(use.current){
            use.current.focus()
        }
    }
  return (
    <div>
        <input type="text"
         ref={use}
         placeholder='click button to focus'
         />
         <button onClick={focusIn}>Focus Input</button>
       <Timer/>
    </div>
  )
}

export default FocusInput
