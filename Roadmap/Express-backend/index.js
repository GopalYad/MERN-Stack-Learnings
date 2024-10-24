const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/SignUp', (req, res) => {
    res.send('get to sign up page')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})