import users from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
dotenv.config()
const register = async (req, res) => {
 try{
    const{username,password,role}=req.body
    const hashpassword = await bcrypt.hash(password,10);
    const newUser = new users({username,password:hashpassword,role})
    await newUser.save()
    res.status(201).json({message:`user registered with username ${username}`})
 }catch(error){
    res.status(500).json({message:`something went wrong`})
 }
}
const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await users.findOne({ username }) // Corrected model usage
    if (!user) {
      return res.status(404).json({ message: `User with username ${username} not found` })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(404).json({ message: `Invalid credentials` }) // Corrected typo
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '24h' })
    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ message: `something went wrong!` })
  }
}

export { register, login }