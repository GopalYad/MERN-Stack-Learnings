import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './src/config/db.js';
import authRouter from './src/routes/authRoutes.js';
import userRouter from './src/routes/userRoutes.js'
import cors from "cors";

import geminiRoutes from './src/routes/geminiRoutes.js'



dbConnect()
dotenv.config()
const app = express();
const PORT = process.env.PORT || 8000
//Middleware
app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use('/auth',authRouter)
app.use('/users',userRouter)
app.use('/chat',geminiRoutes)
app.listen(PORT,()=>{
    console.log(`something is cooking on ${PORT}`)
})