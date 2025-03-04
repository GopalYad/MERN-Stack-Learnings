import React from 'react'
import useFetch from './useFetch'
const Display = () => {
   const[data]=useFetch('https://jsonplaceholder.typicode.com/todos/')
  return (
    <div>
      {data && data.map((item)=>(
        <h4 key={item.id}>{item.title}</h4>
      ))}
    </div>
  )
}

export default Display
