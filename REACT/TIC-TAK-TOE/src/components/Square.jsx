import React from 'react'
import '../../src/index.css'
const Square = ({value,onSquareClick}) => {
  return (
    <button className='btn'
    onClick={onSquareClick}
    >
     {value}
    </button>
  )
}

export default Square
