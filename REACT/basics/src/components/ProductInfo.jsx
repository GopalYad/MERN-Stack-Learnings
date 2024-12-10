import React from 'react'
const product = {
    name : 'Laptop',
    price : 1200,
    availability : 'In stock'
}
const ProductInfo = () => {
  return (
    <div>
      <p>{product.name}</p>
      <p>${product.price}</p>
      <p>{product.availability}</p>
    </div>
  )
}

export default ProductInfo
