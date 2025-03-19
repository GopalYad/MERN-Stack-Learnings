import express from 'express'
import register from '../controllers/userRegister.js'
import login from '../controllers/userLogin.js'
const route = express.Router()

route.post('/signup',register)
route.post('/login',login)
export default route