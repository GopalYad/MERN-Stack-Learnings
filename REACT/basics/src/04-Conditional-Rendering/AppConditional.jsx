

import React from 'react'
import Weather from './Weather'
import UserStatus from './UserStatus'
import Greeting from './Greeting'
import StyleCard from './StyleCard'
const ValidPassword = ()=> <h1>This is Valid Password</h1>

const InvalidPassword = ()=> <h1>This isN'T Valid Password</h1>

const Password = ({isValid})=>{
    // if(isValid){
    //     return < ValidPassword />
    // }
    // return <InvalidPassword/>

    return isValid?<ValidPassword/>:<InvalidPassword/>
}

const Cart = ()=>{
    const product = ['Laptop' , 'Phone','Watch','Clock','Bottle']
    return(
        <>
        <h1>Cart</h1>
        {product.length>0 && <h2>You have {product.length} product in the cart</h2>}
        <h2>Products</h2>
        {product.map((items)=>(
            <li key={Math.random()}>{items}</li>
        ))}
        </>
    
    )
}

const AppConditional = () => {
  return (
    <div>
       {/* <Password isValid = {false}/> */}

       <Cart/>

       <Weather
       temp = {19}
       />

      <UserStatus isAdmin ={false} loggedIn ={true}/>
      <Greeting />
      <StyleCard/>
    </div>
  )
}

export default AppConditional
