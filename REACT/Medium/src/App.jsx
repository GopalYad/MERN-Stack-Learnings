import React, { createContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import ComponentA from './useContext/ComponentA'
import UserContext from './useContext/Assignment/UserContext'
import ExampleOne from './useContext/useContext/ExampleOne'
import StateReducerOne from './useReduce/stateReducerOne'
import StateReducerTwo from './useReduce/StateReducerTwo'
import Form from './useReduce/Form'
import FocusInput from './useRef/FocusInput'
// import UserContext from './useContext/userContext'
// import UpdateUser from './useContext/UpdateUser'
export const Data = createContext()
export const Data1 = createContext()
const App = () => {
  const name = 'Gopal'
  const age = 22
  const[counter,setCounter]=useState(0)
  const[movie,setMovie]=useState({
    title:'spider-man',
    rating:'7'
  })
  const[data,setData]=useState(()=>{
    const savedData=localStorage.getItem("name")
    return savedData? JSON.parse(savedData):"";
  })
  const[movies,setMovies]=useState([
    {id:1,title:'spiderman-1',rating:5},
    {id:2,title:'maskman-1',rating:5},
  ])


  return (
    <div>
      <State counter={counter} setCounter={setCounter}/>
      <StateOne movie={movie} setMovie={setMovie}/>
      <StateTwo movies={movies} setMovies={setMovies}/>
      <StateThree data={data} setData={setData}/>
      <ReactPortalOne/>
      <Switcher/>
      <StateFour  counter={counter} setCounter={setCounter}/>
   {/* <UserContext/>
   <UpdateUser/> */}
   <Data.Provider value={name}>
    <Data1.Provider value={age}>
    <ComponentA />
    </Data1.Provider>
   </Data.Provider>
   <UserContext/>
   {/* <ExampleOne/> */}
   <StateReducerOne/>
   <StateReducerTwo/>
   <Form/>
   <FocusInput/>
    </div>
  )
}
export default App


const State = ({counter,setCounter})=>{
  const[name,setName]=useState(['Rahul','sneha','ram'])
  const addName=()=>{
    setName([...name,'shreya'])
  }
  return(
    <section>
     <div>
     <h1>
        {name.map((name)=>
       ( <p key={Math.random()}>{name}</p>)
        )}
      </h1>
       <button  onClick={addName}>Add Name</button>
     </div>

     <div>
      <h1 >{counter}</h1>
       <button onClick={()=>setCounter(counter+1)}>+</button>
       <button onClick={()=>setCounter(counter-1)}>-</button>
       <button onClick={()=>setCounter(0)}>ac</button>
     </div>
    </section>
  )
}


const StateOne = ({movie,setMovie})=>{
  const changeRating =()=>{
    setMovie({...movie,rating:9})
  }
  return(
    <section>
       <div>
        <h1>{movie.title}</h1>
        <h3>{movie.rating}</h3>
        <button onClick={changeRating}>ADD movie</button>
       </div>
    </section>
  )
}


const StateTwo =({movies,setMovies})=>{
  const changeMovieName=()=>{
    setMovies(movies.map(m=>m.id===1?{...movies,title:'john wick 5'}:m))
  }
    return(
      <section>
        <div>
        {movies.map((movie)=>(
          <h1 key={Math.random()}>{movie.title}</h1>
        ))}
        </div>
        <button onClick={changeMovieName}>Change Movie Name</button>
      </section>
    )
}

const StateThree =({data,setData})=>{
  const getInput=(event)=>{
    setData(event.target.value)
  }
  useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(data))
  },[data])
    return(
  <section>
    <input type="text" name="name" value={data} onChange={getInput} placeholder='Enter name here' />
    <button onClick={()=>setData("")}>Clear</button>
  </section>
    )
}

const ReactPortalOne=()=>{
  const[inputValue,setInputValue]=useState('')
  const[copy,setCopy]=useState(false)

  const clickCopy=()=>{
    navigator.clipboard.writeText(inputValue).then(()=>{
      setCopy(true)
      setTimeout(() => {
        setCopy(false)
      }, 1000);
    })
  }
  return(
    <section>
      <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)} />
      <button onClick={clickCopy}>Copy</button>
      <PopupContent copy={copy}/>
    </section>
  )
}

const PopupContent =({copy})=>{
  return createPortal(
    <section>
     {copy && <div style={{postion:'absolute', borderBottom:'0'}}>Copy to clipboard</div>}
    </section>
    ,document.querySelector('#popup')
  )
}

const Switcher =()=>{
  const[sw,setSw]=useState(false)
  return(
    <div>
     {sw? <span>Dark</span>:<span>Light</span>}
     <br />
     <input type="text" key={sw?'dark':'light'}/>
     <button onClick={()=>setSw((s)=>!s)}>Switch</button>
    </div>
  )
}

const StateFour =({counter,setCounter})=>{
  const[something,setSomething]=useState(0)
  useEffect(()=>{
    console.log('call useffect')
    document.title=`increament ${counter}`
  },[counter,something])
  return(
    <section>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>increament</button>
      <button onClick={()=>setSomething(counter+1)}>increament</button>
    </section>
  )
}