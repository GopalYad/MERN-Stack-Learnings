import express from 'express'
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('data is being send to port 8000')
})
router.post('/create',(req,res)=>{
    res.send('append some data to this.')
})
router.delete('/delete',(req,res)=>{
    res.send('delete data from port 8000')
})
router.put('/change',(req,res)=>{
    res.send('change made in data')
})

export default router