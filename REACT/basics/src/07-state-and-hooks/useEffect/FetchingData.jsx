import React, { useEffect, useState } from 'react'

const FetchingData = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
          const storeData =  await fetch('https://jsonplaceholder.typicode.com/posts')
           const value =  await storeData.json()
           if(value && value.length) setData(value)
        }
        fetchData()
    },[])
  return (
    <div>
       <h1>{data.map((item)=>(
        <li key={item.id}>{item.body}</li>
       ))}</h1>
    </div>
  )
}

export default FetchingData
