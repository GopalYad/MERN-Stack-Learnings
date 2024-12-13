
import React from 'react'
const ActionAdmin = ()=><h1>Welcome Admin!!</h1>
const ActionUser = ()=><h1>Welcome User!!</h1>
const UserStatus = (isAdmin,loggedIn) => {
 if(isAdmin ===true && loggedIn===true){
   return <ActionAdmin/>
 }
 return <ActionUser/>
}

export default UserStatus
