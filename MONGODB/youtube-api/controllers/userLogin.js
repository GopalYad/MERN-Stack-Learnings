import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cloudinary from '../lib/coludinary.js'
import mongoose from 'mongoose'
import 'dotenv/config'
const login = async(req,res)=>{
  try{
   const{email}=req.body
   console.log(email)
   const existingUser = await User.findOne({email:req.body.email})
   if(!existingUser)return res.status(404).json({message:`user not found`})
    const isValid= await bcrypt.compare(
   req.body.password,
   existingUser.password
)

   if(!isValid)return res.status(500).json({message:`invalid credential`})
   
    const token =jwt.sign(
        {
            _id:existingUser._id,
            channelName:existingUser.channelName,
            email:existingUser.email,
            phone:existingUser.phone,
            logoId:existingUser.logoId,
        },
        process.env.JWT_TOKEN,
        {expiresIn:'10d'}
    )
    res.status(200).json({
        _id:existingUser._id,
        channelName:existingUser.channelName,
        email:existingUser.email,
        phone:existingUser.phone,
        logoId:existingUser.logoId,
        logoUrl:existingUser.logoUrl,
        token:token
    })
  }catch(error){
  console.log(error)
  res.status(500).json({error:`something went wrong`,message:error.message})
  }
}

export default login