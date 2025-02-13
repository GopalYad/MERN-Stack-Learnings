import express from 'express'
const app= express();

//simple http method 
app.get('/',(req,res)=>{
    res.send('data is being send to port 8000')
})
app.post('/create',(req,res)=>{
    res.send('append some data to this.')
})
app.delete('/delete',(req,res)=>{
    res.send('delete data from port 8000')
})
app.put('/change',(req,res)=>{
    res.send('change made in data')
})
app.listen(8000,()=>{console.log('something cooking')})