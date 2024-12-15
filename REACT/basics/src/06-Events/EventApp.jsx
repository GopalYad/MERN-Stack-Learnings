import React from 'react'
const Move = () =>{
   const moveHandler =()=>{
    alert('Mose moved event fired')
    console.log('Mouse move event fired')
   }
    return(
        <p onMouseMove={moveHandler}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Mollitia quis praesentium qui nostrum quam est ratione ab 
            perspiciatis soluta animi quas libero fugiat laborum 
            maiores eum omnis asperiores, eos esse?
        </p>
    )
}
const Copy = ()=>{
    const copyHandler =()=>console.log('You copy me!!!')
    return <p onCopy={copyHandler}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Cum repellendus atque provident necessitatibus ut id incidunt voluptates iste maiores architecto.</p>
}
const Button = ()=>{
    const handleClick =  () => console.log(Math.round(Math.random()*10))
    return <button onClick={handleClick}>Click</button>
}
const EventApp = () => {
  return (
    <>
     <Button/> 
     <Copy/>
     <Move/>
    </>
  )
}

export default EventApp
