import express from 'express'
const app = express();
//string pattern path 
app.get('/ab?cd',(req,res)=>{
    res.send('if user request acd or abcd then it hit to abcd')
})

//regex
app.get('/x/',(req,res)=>{
    res.send('if user path includes word x , it will work fine')
})

//nested 
app.get('/products/iphone',(req,res)=>{
    res.send('it works only user searches exacts products/iphone')
})
app.listen(8000,()=>{console.log('cooked')})