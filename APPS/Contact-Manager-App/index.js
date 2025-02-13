import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/contactRoutes.js'
import { errorHandler } from './middleware/errorhandler.js';
import connectDb from './config/dbConnection.js';
connectDb();

dotenv.config();
const app = express();
const port= process.env.PORT|8000;
app.use(express.json())
app.use("/api/contacts",routes)
app.use(errorHandler)


app.listen(port,()=>console.log(`something is cooking on ${port}`))