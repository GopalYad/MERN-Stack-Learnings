import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cloudinary from '../lib/coludinary.js'
import mongoose from 'mongoose'

const register =async(req,res)=>{
    try {
        const hashcode = await bcrypt.hash(req.body.password, 10);
        console.log(hashcode)
      
        // Check if files and logoUrl exist
        if (!req.files || !req.files.logoUrl) {
          return res.status(400).json({
            error: "Logo image is required",
          });
        }
        
        const uploadedImage = await cloudinary.uploader.upload(
          req.files.logoUrl.tempFilePath
        );
     
        const newUser = new User({
          _id: new mongoose.Types.ObjectId(),
          channelName: req.body.channelName,
          email:req.body.email,
          phone: req.body.phone,
          password: hashcode,
          logoUrl: uploadedImage.secure_url,
          logoId: uploadedImage.public_id,
        });
    
        let user = await newUser.save();
    
        res.status(201).json({
          newUser: user,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error,
        });
      }
    
}

export default register