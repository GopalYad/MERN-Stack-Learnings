import http from 'http'
const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('<h1>Home</h1>')
  } else if(req.url==='/contact'){
    res.end('<h1>Contac</h1>')
  } else{
    res.end("<h1>Page not found :(</h1>")
  }
})
server.listen(8000,()=>console.log('server up!'))