import React, { useState } from 'react'

const ChangeBackgroundColor = () => {
    const[color,setColor]=useState('white')
  return (
    <div style={{background:color,height:'100vh'}}>
      <button onClick={()=>setColor('black')}>Black</button>
      <button onClick={()=>setColor('red')}>Red</button>
    </div>
  )
}

export default ChangeBackgroundColor
