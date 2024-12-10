import React from 'react'
const users =   [
    {id :1 , name : 'Alice' , age : 25},
    {id : 2 , name : 'Bob', age:21},
    {id: 3 , name : 'Charlie',age :31}];
const UserList = () => {
  return (
    <div>
     <div>{users.map(({id,name,age})=>(
       <section key={id}>
        <p>Name :{name}</p>
        <p>Age:{age}</p>
       </section>
      ))}</div> 
    </div>
  )
}

export default UserList
