import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    user:{type:mongoose.Schema.Type.objectId,ref:'User'}
})

const Post = mongoose.model('Post',postSchema)