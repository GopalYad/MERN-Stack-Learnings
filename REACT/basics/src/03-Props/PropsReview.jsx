import React from 'react'
//parent componetn
const PropsReview = () => {
  return (
    <div>
      <User
      username = 'JANE'
      age = {23}
      isMarried = {false}
      employed = {true}
      profession = 'software engineer'
      />
    </div>
  )
}
 
///child component
const User = ({username,age,isMarried,employed,profession})=>{
   return(
    <>
     <h1>{username}</h1>
     <p>{age}</p>
     <p>{employed}</p>
     <p>{profession}</p>
    </>
   )
}
export default PropsReview
