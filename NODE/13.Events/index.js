import EventEmitter from 'events'

//create instance of emitter
const customEmitter = new EventEmitter();

//1. on : listen/register for an event.
//2. once : listen/register for an event .
//3. emit : emit/call on event .

customEmitter.on('response',(name,id)=>{
    console.log(`name:${name},id:${id}`)
})

customEmitter.emit('response','Gopal',20)