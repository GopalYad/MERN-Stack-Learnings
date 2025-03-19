import mongoose  from "mongoose";
import 'dotenv/config'
const dbConnect = async()=>{
    await mongoose.connect(process.env.MONGO_CONN)
    console.log('db coonnected>>')
}

export default dbConnect