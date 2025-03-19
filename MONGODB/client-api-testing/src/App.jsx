import React from 'react'
import axios from 'axios'
import { useState } from 'react';
const API_URL = "http://localhost:8080/api/users";
const App = () => {

  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const handleChange =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const response = await axios.post(API_URL,formData)
      console.log("User added:", response.data);
    }catch(error){
      console.error("Error adding user:", error);
    }
  }
  return (
    <form  onSubmit={handleSubmit} >
       <input type="text" name ='name' onChange={handleChange} />
       <input type="email" name="email"  onChange={handleChange} />
      <input type="number" name="age"    onChange={handleChange}/>
      <button type="submit">Add User</button>
    </form>
  )
}

export default App
