import express from 'express'
import gemini from  '../controllers/geminiController.js'
const router = express.Router()

router.post('/prompt-chat',gemini)

export default router