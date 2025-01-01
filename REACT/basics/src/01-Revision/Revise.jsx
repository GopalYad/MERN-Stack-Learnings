import React from 'react'

const Revise = (props)=>{
    const numbers = [1,2,3,4,5,6];
    const users = [
    {id:1, name:'Alice',age:23},
    {id:2, name:'Bob',age:21},
    {id:3, name:'Charlie',age:31}
    ];
    const productInfo =[
        {id:1,name:'Phone',price:699},
        {id:2,name:'Laptop',price:2222},
        {id:3,name:'Headphone',price:699}
    ];
    return(
    <main>
     React Revision

     {/* how to make list of data?? */}
     {numbers.map((numbers)=>(
        <ul key={numbers}>
            <li>{numbers*4}</li>
        </ul>
     ))}

     <div>{users.map(({id,name,age})=>(
        <div key={id}>
          <p>{name}</p>
          <p>{age}</p>
        </div>
     ))}</div>

     <div>
        {productInfo.map((productInfo)=>(
          <div key={productInfo.id}>
            <p>{productInfo.name}</p>
           <p>{productInfo.price}</p>
          </div>
        ))}
     </div>

       <h1>Name : {props.name}</h1>
       <p>Hobby :{props.hobby }</p>

       
       
    </main>
    )
}

export default Revise