import 'dotenv/config'
import mongoose from 'mongoose'
const dbConnect = async()=>{
    const db = await mongoose.connect(process.env.MONGO_CONN)
    console.log('db connected')
}

export default dbConnect