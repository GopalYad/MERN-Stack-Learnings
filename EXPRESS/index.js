import express from 'express'
import student from './routes/student.js'
const app= express();

//simple http method 
//middleware
app.use('/student',student)
app.listen(8000,()=>{console.log('something cooking')})