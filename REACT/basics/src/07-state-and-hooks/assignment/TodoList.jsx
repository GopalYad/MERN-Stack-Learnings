import React, { useState } from 'react'

const TodoList = () => {
    const[input,setInput]=useState("");
    const[todo,setTodo]=useState([]);
    const inputValue=(event)=>{
        setInput(event.target.value)
    }
    const displayTodo=()=>{
        setTodo([...todo,input])
        setInput("");
    }
  return (
    <div>
      <section>
        <input type="text" value={input} onChange={inputValue}  placeholder='ADD todo here'/>
        <button onClick={displayTodo}>ADD todo</button>
        <div>{todo.map((value,index)=>(
            <p key={index}>{value}</p>
        ))}</div>
      </section>
    </div>
  )
}

export default TodoList
