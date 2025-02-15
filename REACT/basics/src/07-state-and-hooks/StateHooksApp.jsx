import React, { useState } from 'react'

const StateHooksApp = () => {

  //working on operations in array
  const [count,setCount]=useState(0);
  const[friends,setFriends]=useState(['Alex','Joohn'])
  const increament =()=>setCount(count+1);
  const decreament =()=>setCount(count-1);
 const addOneFriend =()=>
  setFriends([...friends ,'Gopal'])
 const removeOneFriend =()=>setFriends(friends.filter(f=>f!=='Gopal'))
 const updateOneFriend =()=>setFriends(friends.map(f=>f==='Alex'?'Alex smith':f))
 //working of operation in objects
 const[movie,setMovie]=useState({
  title:'Avatar',
  rating:'8.7'
 })
 const handleClick =()=>{
  // const copymovie ={
  //   ...movie,
  //   rating:5
  // }
  // setMovie(copymovie)
  setMovie({...movie,rating:5})
 }


 //working of operation in objects of array
 const[data,setData]=useState([
  {id :1 , movie:'Captain America',rating:7.3},
  {id :2 , movie:'John Wick',rating:8.3}
 ])
  const ChangeMovieName = ()=>{
    setData(data.map(m =>m.id===1?{...movie,movie:'Avengers'}:m))
  }
 
  console.log(count)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
      <p>{friends.map(f=>(<li key={Math.random()}>{f}</li>))}</p>
      <button onClick={addOneFriend}>Add new Friend</button>
      <button onClick={removeOneFriend}>remove one Friend</button>
      <button onClick={updateOneFriend}>update one Friend</button>
      
     <section>
      <h1>{movie.title}</h1>
      <h1>Ratings : {movie.rating}</h1>
      <button onClick={handleClick}>Change Rating</button>
     </section>


     <section>
      {data.map(movie=>(<li key={Math.random()}>{movie.movie}</li>))}
      <button onClick={ChangeMovieName}>Change Name</button>
     </section>
    </div>
  )
}

export default StateHooksApp
