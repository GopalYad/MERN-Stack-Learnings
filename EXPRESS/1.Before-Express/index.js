// import http from 'http'
// const server = http.createServer((req,res)=>{
//   if(req.url === '/'){
//     res.end('<h1>Home</h1>')
//   } else if(req.url==='/contact'){
//     res.end('<h1>Contac</h1>')
//   } else{
//     res.end("<h1>Page not found :(</h1>")
//   }
// })
// server.listen(8000,()=>console.log('server up!'))

import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send( 
        '<h1>Home</h1>'
    )
})

app.get('/about',(req,res)=>{
    res.send('<h1>About us </h1>')
})


app.get('/contact',(req,res)=>{
    res.send('<h1>Contact us </h1>')
})
app.listen(8000,()=>{console.log('cooked')})