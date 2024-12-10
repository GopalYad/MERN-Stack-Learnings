import React from 'react'
const productInfo =[
    {id : 1 , name : 'Phone',price :699},
    {id : 2 , name : 'Laptop',price :2222},
    {id : 3 , name :'Headphones',price:699}
];
const ProductList = () => {
  return (
    <div>
      <div>
        {productInfo.map(({id,name,price})=>(
        <section key={id}>
            <p>{name}</p>
            <p>{price}</p>
        </section>
      ))}
      </div>
    </div>
  )
}

export default ProductList
