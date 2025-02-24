import React from 'react'

const ComponentsOne = ({count,onChangeHandler}) => {
   const addIncerment = onChangeHandler
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addIncerment}>Inceramen</button>
    </div>
  )
}

export default ComponentsOne
