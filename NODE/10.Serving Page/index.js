import http from 'http'
import  fs from 'fs'
import { error } from 'console'

const server = http.createServer((req,res)=>{
  if(req.url==='/'){
   res.writeHead(200,'OK',{"content-type":"text/html"})
   fs.readFile('./public/home.html',(error,data)=>{
     if(error) throw error
     res.end(data)
   })
  } else if(req.url==='/contact'){
    res.writeHead(200,'OK',{'Content-Type':'text/html'})
    fs.readFile('./public/contact.html',(error,data)=>{
        if(error) throw error
        res.end(data)
    })
  } else{
    res.writeHead(404,'BAD',{'Content-Type':'text/html'})
    res.end('<h1>Page not found :( </h1>')
  }
})
server.listen(8000,()=>console.log('server up!'))