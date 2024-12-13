import React from 'react'
const BelowTemp = ()=><h2>It's Cold Outside!!</h2>
const BetweenTemp =()=><h2>It's nice outside!!</h2>
const AboveTemp =()=><h2>It's hot Outside!!</h2>
const Weather = ({temp}) => {
  if(temp< 15){
    return <BelowTemp/>
  } else if(temp>=15&&temp<25){
    return <BetweenTemp/>
  }
  return <AboveTemp/>
}

export default Weather
