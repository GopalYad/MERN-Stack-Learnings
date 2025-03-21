import mongoose from "mongoose";

const userSchema= mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true,},
  age:{type:Number}
},{timeStamps:true})

const User = mongoose.model('User',userSchema)

export default User