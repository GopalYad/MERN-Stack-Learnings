import React, { useRef } from 'react'

const ExampleOne = () => {
    const inputRef =useRef(null)
    const handleClick=()=>{
        inputRef.current.focus()
    }
  return (
    <div>
     <input type="text" ref={inputRef} />
     <button onClick={handleClick}>Focus the input</button>
    </div>
  )
}

export default ExampleOne
