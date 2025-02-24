import React, { useEffect, useState } from 'react'

const BasicEffectState = () => {
    const[value,setValue]=useState(0);

    useEffect(()=>{
        console.log(`useffect call value ${value}`)
    },[value])
    const handleIncreament =()=>{
        setValue(value+1)
    }
  return (
    <div>
      <p>{value}</p>
      <button onClick={handleIncreament}>Increament</button>
    </div>
  )
}

export default BasicEffectState
