import asyncHandler from 'express-async-handler'
import Contacts from '../models/contactModel.js'
//@desc Get all contacts
//@route GET  /api/contacts
//@acess public
export const getContacts =asyncHandler( async (req,res)=>{
   const contact = await Contacts.find()
   res.status(201).json(contact)
  
 })

export const createContact =asyncHandler(async (req,res)=>{
   
    const{name,email,phone}=req.body;
    if(!name ||!email || !phone){
        res.status(400)
        throw new Error("filds are mandatory")
    }
    const contact = await Contacts.create({
      name,email,phone
    })
    res.status(201).json(contact)
 })
 export const getContact =asyncHandler(async (req,res)=>{
   const contact = await Contacts.findById(req.params.id);
   if(!contact){
      res.status(404);
      throw new Error("not found contact")
      
   }
    res.status(200).json(contact)
 })
 export const updateContact =asyncHandler(async (req,res)=>{
    res.status(200).json({message:`update  contacts for ${req.params.id}`})
 })

 export const deleteContact =asyncHandler(async (req,res)=>{
    res.status(200).json({message:`delete contacts for ${req.params.id}`})
 })

