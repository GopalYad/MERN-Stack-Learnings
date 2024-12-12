

//creating child component
import React from 'react'

const Props = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.name} width={300}/>
      <h1>Name :{props.name}</h1>
      <p>Hobbies : {props.hobby}</p>
      <p>Age : {props.age}</p>
      <p>is Married : {props.isMarried}</p>

    </div>
  )
}

export default Props

