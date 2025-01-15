import React from 'react'
const numbers = [1,2,3,4,5,6];
const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 699,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Laptop",
    price: 999,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 3,
    name: "Headphones",
    price: 199,
    category: "Accessories",
    inStock: false,
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 89,
    category: "Home Appliances",
    inStock: true,
  },
  {
    id: 5,
    name: "Gaming Console",
    price: 499,
    category: "Gaming",
    inStock: true,
  },
  {
    id: 6,
    name: "Office Chair",
    price: 150,
    category: "Furniture",
    inStock: false,
  },
];

const List = () => {
  return (
    <main>
      {numbers.map((number)=>(
       <ul key={number}>
        <li>{number}</li>
       </ul>
      ))}
      {products.map(({id,name,price,category,inStock})=>(
        <ul key={Math.random()} >
          <li>{name}</li>
          <li>{price}</li>
          <li>{category}</li>
          <li>{+inStock}</li>
        </ul>
      ))}
    </main>
  )
}

export default List
