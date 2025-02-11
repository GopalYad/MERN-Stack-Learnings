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

// app.get('/',(req,res)=>{
//     res.send( 
//         '<h1>Home</h1>'
//     )
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>About us </h1>')
// })


// app.get('/contact',(req,res)=>{
//     res.send('<h1>Contact us </h1>')
// })

// app.get('/ab?cd',(req,res)=>{
//     res.send('if user request acd or abcd then it hit to abcd')
// })

// //regex
// app.get(/x/,(req,res)=>{
//     res.send('if user path includes word x , it will work fine')
// })

// app.get('/products/iphone',(req,res)=>{
//     res.send('it works only user searches exacts products/iphone')
// })

// console.clear()
// app.get('/double-cd',(req,res,next)=>{
//     console.log('firs callback')
//     next()
// },(req,res)=>{
//     res.send('second callback')
// })

// //array of callback function
// console.clear()
// const cb1 =(req,res,next)=>{
//     console.log('first callback');
//     next();
// }

// const cb2 =(req,res,next)=>{
//     console.log('first callback');
//     next();
// }
// const cb3 =(req,res,next)=>{
//     console.log('second callback');
//     next();
// }
// const cb4 =(req,res)=>{
//     res.send('array of callback');
  
// }
// app.get('/array-cb',[cb1,cb2,cb3,cb4])


//testing with postman 

// app.get('/student',(req,res)=>{
//     res.send('retrive student data');
// })
// app.post('/student',(req,res)=>{
//     res.send('insert student data');
// })
// app.put('/student',(req,res)=>{
//     res.send('update student data');
// })
// app.delete('/student',(req,res)=>{
//     res.send('delete student data');
// })

app.route('/student')
.get((req,res)=>{res.send('all student')})
.post((req,res)=>{res.send('insert studnet data')})
.put((req,res)=>{res.send('change studnet data')})
.delete((req,res)=>{res.send('delete student data ')})
app.listen(8000,()=>{console.log('cooked')})