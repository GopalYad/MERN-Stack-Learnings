import User from '../models/user.model.js'
//create a new user 

const createUser = async(req,res)=>{
  try{
   const{name,email,age}=req.body;
   const user = new User({
    name,
    email,
    age
   })
   await user.save()
   res.status(201).json({ message: "User created successfully", user });
  }catch(error){
    console.log(`error in creating user`,error)
    res.status(500).json({message:error.message})
  }
}

//get All users

const getAllUsers=async(req,res)=>{
    try{
     const user = await User.find()
     res.status(200).json(user);
    }catch(error){
        console.log(`error in getting all user`,error)
        res.status(500).json({message:error.message})
    }
}

// Get user by ID

const getUserById=async(req,res)=>{
    try{
    const user =  await User.findById(req.params.id)
    if(!user)return res.status(404).json({message:`user not found`})
        res.status(200).json(user);
    }catch(error){
        console.log(`error in getting individual user`,error)
        res.status(500).json({message:error.message})
    }
}

//update user
const updateUser =async(req,res)=>{
   try{
    const updatedUser=await User.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
    })
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json(updatedUser);
   }catch(error){
    console.log(`error in getting individual user`,error)
    res.status(500).json({message:error.message})
   }
}

//delete user 

const deleteUser = async(req,res)=>{
   try{
    const user =await User.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted" });
   }catch(error){
    res.status(500).json({ error: error.message });
   }
}

export{createUser,getAllUsers,getUserById,updateUser,deleteUser}