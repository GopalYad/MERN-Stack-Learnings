import React from 'react'

const Product = ({name,price}) => {
  return (
    <div>
      <h1>Product :{name}</h1>
      <h2>Price :${price}</h2>
    </div>
  )
}

export default Product
