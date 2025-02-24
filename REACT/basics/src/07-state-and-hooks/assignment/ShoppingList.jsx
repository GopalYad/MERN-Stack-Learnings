import React, { useState } from 'react'

const ShoppingList = () => {
  const[product,setProduct]=useState({name:'',quantity:''})
  const[shopping,setShopping]=useState([]);
  const addNameOfProduct=(event)=>{
    setProduct({...product,name:event.target.value})
  }
  const addQuantityOfProduct=(event)=>{
    setProduct({...product,quantity:event.target.value})
  }
  const addShoppingListProduct=()=>{
    setShopping([...shopping,product]);
    setProduct({name:"",quantity:""})
  }
  return (
    <div>
      <section>
      <input type="text" value={product.name} onChange={addNameOfProduct} placeholder='Enter product here...' />
      <input type="text" value={product.quantity} onChange={addQuantityOfProduct}  placeholder='Enter quantity here...'/>
      <button onClick={addShoppingListProduct}>ADD</button>
      <div>
        {shopping.map((product,index)=>(
          <p key={index}>{product.name}-{product.quantity}</p>
        
        ))}
      </div>
      </section>
    </div>
  )
}

export default ShoppingList
