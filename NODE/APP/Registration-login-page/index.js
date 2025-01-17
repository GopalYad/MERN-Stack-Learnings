import http from 'http'
import fs from 'fs'

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.writeHead(200,'OK',{"content-Type":"text/html"})
         fs.readFile('./public/index.html',(error,data)=>{
            if(error) throw error
            res.end(data)
         })
    } else{
        res.writeHead(404,'BAD',{"content-type":"text/html"})
        res.end('<h1>Page not found :( </h1>')
    }
})

server.listen(8000,()=>console.log('server up!'))