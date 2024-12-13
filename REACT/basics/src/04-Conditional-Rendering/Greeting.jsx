import React from 'react'
const ActionMorning = ()=><h1>Good Morning!!!</h1>
const ActionEvening =()=><h1>Good Evening!!!</h1>
const Greeting = ({timeofday}) => {
   if(timeofday === 'morning'){
    return <ActionMorning/>
   } else if(timeofday === 'evening'){
    return <ActionEvening/>
   }
 
}

export default Greeting
