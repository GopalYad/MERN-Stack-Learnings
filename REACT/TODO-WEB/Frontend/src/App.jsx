import React, { useReducer } from 'react'

const reducer=(state,action)=>{
  switch(action.type){
    case 'add_task':
      
  }
}
const initialState=[
  { id:1 ,task:'wake up early' ,value:true},
  { id:2 ,task:'eat pia' ,value:true}
]
const handleInput=()=>{

}
const addTask=()=>{

}
const App = () => {
  const[state,dispatch]=useReducer(reducer,initialState);
  return (
    <div style={{display:'flex' ,justifyContent:'center',alignItems:'center' ,maxHeight:'100vh' , flexDirection:'column'}}>
       <h1>Todo Task : {state.length}</h1>
       <div>
        <input type="text"
        onBlur={handleInput} />
        <button
        onClick={addTask}
        >ADD</button>
        </div>
        <div>
          <p>{
            state.map((tasks)=>(
              <p key={tasks.id}>{tasks.task} </p>
              
            ))
            }</p>
        </div>
    </div>
  )
}

export default App
