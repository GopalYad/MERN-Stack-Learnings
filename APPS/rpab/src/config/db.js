import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const dbConnect = async ()=>{
  try{
    const connect = await mongoose.connect(process.env.MONGO_CONN)
    console.log('mongo connect')
  }catch(error){
    console.log(error)
    process.exit(1)
  }
}

export default dbConnect