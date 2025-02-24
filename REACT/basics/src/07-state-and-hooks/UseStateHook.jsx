import React, { useState } from 'react'
import ComponentOne from './components/ComponentsOne.jsx'
const UseStateHook = () => {
    const[count,setCount]=useState(0);
    const increament =()=> setCount(count+1);
    //jab count ki value 0 ya o se kam ho toh 0 rakho else ghatao
    const decreament =()=> setCount(count =>count<=0?count:count-1);
   
    //operating on array
    const[task,setTask]=useState("")
    const getValue=(event)=>{
        setTask(event.target.value);
    }
    const[data,setData]=useState(['ALEX','JOHN'])
    const addFriend=()=>{
        setData([...data,task])
        setTask("")
    }
    const removeFriend =(name)=>{
        setData(data.filter(f=>f!==name))
    }
   
   
  return (
    <div>
      <section>
        <h1>{count}</h1>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
      </section>

     <section>
        <input type="text" value={task} onChange={getValue}  />
        <button onClick={addFriend}>Add Friend</button>
       
        <div>{data.map((d,i)=>(
            <h1 key={i}>
                {d}
                <button onClick={()=>removeFriend(d)}>Remove Friend</button>
                </h1>))}</div>
     </section>

     <section>
        <ComponentOne count={count} onChangeHandler ={()=>setCount(count+1)}/>
     </section>
    </div>
  )
}

export default UseStateHook;
