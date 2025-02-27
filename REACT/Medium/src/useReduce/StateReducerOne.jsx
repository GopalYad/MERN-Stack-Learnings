import React, { useReducer, useState } from 'react'
const reducer=(state,action)=>{
  switch(action.type){
    case 'INCREAMENT':
        return {count : state.count + 1}
    case 'DECREAMENT':
        return {count : state.count-1}
    case 'RESET':
        return {count : 0}  
    case 'increamentByAmount':
        return {count :state.count + action.payload }
    case 'decreamentByAmount':
        return {count : state.count - action.payload}          
    default:
        return state;        
  }
}
const initialState ={count:0}
const StateReducerOne = () => {
    const[state,dispatch]=useReducer(reducer,initialState)
    const[inputValue,setInputValue]=useState(0)
    const handleIncreamentByAmount =()=>{
        dispatch({type:'increamentByAmount' ,payload:+inputValue})
        setInputValue(0)
    }
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={()=>dispatch({type:'INCREAMENT'})}>+</button>
      <button onClick={()=>dispatch({type:'DECREAMENT'})}>-</button>
      <button onClick={()=>dispatch({type:'RESET'})}>reset</button>
      <div>
           <input type="number" value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
           <button onClick={handleIncreamentByAmount}>Add</button>
           <button onClick={handleIncreamentByAmount}>Minus</button>
      </div>
    </div>
  )
}

export default StateReducerOne
