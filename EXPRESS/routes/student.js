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
// router.get('/change/:name',(req,res)=>{
//     const{name}=req.params
//     res.send(`route params: ${name}`)
// })
router.get('/change',(req,res)=>{
    const{name,id}=req.query
    res.send(`client data:${name} & theier id: ${id}`)
})
const student=[
    {
        name:'alison',
    }
]
router.get('/change/data',(req,res)=>{
    res.json(
        student
    )
})
export default router