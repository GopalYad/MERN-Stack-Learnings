import express from 'express'
import 'dotenv/config'
import dbConnect from './config/db.js'
const app = express()
const Port = process.env.PORT
dbConnect()
app.listen(Port,()=>console.log(`COOKING ON ${Port}`))