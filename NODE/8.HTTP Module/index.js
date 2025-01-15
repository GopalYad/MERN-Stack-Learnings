import http from 'http'
//create server
const server =  http.createServer((req,res)=>{
//  console.log(req)
res.setHeader('Content-type','text/html')
res.write('<h1>Hello from Nodejs</h1>')
})

server.listen(8000)