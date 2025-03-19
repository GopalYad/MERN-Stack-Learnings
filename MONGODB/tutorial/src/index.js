import express from 'express'
import 'dotenv/config'
import dbConnect from './config/db.js'
import userRoutes from './routes/user.routes.js'
import cors from 'cors'
const app = express()
const Port = process.env.PORT
dbConnect()

app.use(express.json())
app.use(cors())
app.use("/api/users", userRoutes);
app.listen(Port,()=>console.log(`COOKING ON ${Port}`))