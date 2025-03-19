import express from 'express'
import 'dotenv/config'
import dbConnect from './lib/db.js'
import userRoute from './routes/userRoute.js'
import videoRoute from './routes/videRoute.js'
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
const app=express()
const PORT=process.env.PORT
app.use(bodyParser.json())

app.use(fileUpload({
   useTempFiles:true,
   tempFileDir:"/tmp/"
}))
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/user',userRoute)
app.use('/api/vi/video',videoRoute)
app.listen(PORT,()=>{
   dbConnect()
})