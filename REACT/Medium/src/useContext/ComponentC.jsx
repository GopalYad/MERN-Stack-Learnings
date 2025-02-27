import React, { useContext } from 'react'
import { Data ,Data1} from '../App'
const ComponentC = () => {
  const username=useContext(Data)
  const age = useContext(Data1)
  return (
    <section>
  may name is:{username} and age is:{age} 
    </section>
    // <Data.Consumer>
    //  {(name)=>{
    // //    return <h1>{name}</h1>
    //    return(
    //     <Data1.Consumer>
    //     {(age)=>{
    //         return <h1>my name is :{name} and age is :{age}</h1>
    //     }}
    //     </Data1.Consumer>
    //    )
    //  }}
    // </Data.Consumer>
  )
}

export default ComponentC
