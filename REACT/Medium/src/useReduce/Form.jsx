import react from 'react'
import { useReducer } from 'react';

const initialState ={
    name:'Tyalor',
    age :42
}
const reducer =(state,action)=>{
    switch(action.type){
        case 'increament':
            return {
              ...state,
             age:state.age+1
            }
        case'changed name':
            return{
                ...state,
        name: action.name
            } 
    }
    throw Error('Unknown action: ' + action.type);
}
const Form=()=>{
    const[state,dispatch]=useReducer(reducer,initialState)
    const onChangeName=(e)=>{
        dispatch({
            type:'changed name',
            name:e.target.value
        });
    }
    const handleButtonClick=()=>{
     dispatch({
        type:'increament'
     })
    }
    return(
        <div>
            <input 
            type="text" 
            value={state.name}
            placeholder='Enter name here..' 
            onChange={onChangeName} />
            <button
            onClick={handleButtonClick}
            >Increament</button>
            <p>Hello,my name is {state.name} and my age is {state.age}.</p>
        </div>
    )
}
export default Form;