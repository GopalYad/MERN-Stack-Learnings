import express from 'express'
import verifyToken from '../middleware/authMiddleware.js'
import authorizeRole from '../middleware/roleMiddleware.js'
const router = express.Router()

//only admin can access
router.get('/admin',verifyToken,authorizeRole('admin'),(req,res)=>{
   res.json({message:`admin login`})
})
//only admin and  doctor can access
router.get('/doctor',verifyToken,authorizeRole('admin','doctor'),(req,res)=>{
    res.json({message:`doctor login`})
})
//all can access this router
router.get('/patient',verifyToken,authorizeRole('doctor','patient','admin'),(req,res)=>{
    res.json({message:`patient login`})
})

export default router