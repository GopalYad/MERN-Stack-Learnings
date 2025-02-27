import React, { createContext, useState } from 'react'
import ExampleTwo from './ExampleTwo'

export const Context = createContext()
export const ContextOne=createContext()
const ExampleOne = () => {
    const[counter,setCounter]=useState(0)
    const[input,setInput]=useState('')
    const[data,setData]=useState([])
  return (
    <div>
      <Context.Provider value={{counter,setCounter}}>
      <ExampleTwo/>
      </Context.Provider>
      <ContextOne.Provider value={{input,setInput,data,setData}}>
        <ExampleTwo/>
      </ContextOne.Provider>
    </div>
  )
}

export default ExampleOne
