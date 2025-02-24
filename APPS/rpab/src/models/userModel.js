import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['admin','doctor','patient']
    }
},{
    timestamps :true
})


const db = mongoose.model('users',userShema);
export default db