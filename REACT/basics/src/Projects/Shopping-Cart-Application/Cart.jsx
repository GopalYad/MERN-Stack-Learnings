import React, { useState } from 'react'

const Cart = () => {
     const[cart,setCart] =useState([]);
    const products = [
        { id: 1, name: 'Phone', price: 699 ,image :'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258' },
        { id: 2, name: 'Laptop', price: 1299,image :'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258' },
        { id: 3, name: 'Headphones', price: 199,image :'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258' },
        { id: 4, name: 'Smartwatch', price: 399,image :'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258' },
      ];
      const actionAddToCart =(product)=>{
       setCart((prevCart)=>[...prevCart,product])
       console.log(product)
       console.log(cart)
      }
      
  return (
    <div style ={{display :'flex' , justifyContent :'space-between'}}>
      {/* View a list of products. */}
       {products.map((item)=>(
        <span style={{backgroundColor:'beige'}} key={item.id}>
            <img style={{width:'13rem'}} src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button
              onClick={() => actionAddToCart(item)}
              style={{
                backgroundColor: "blue",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
        </span>
        
       ))}
      
    </div>
  )
}

export default Cart
