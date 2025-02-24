import React from 'react'
import {createPortal} from 'react-dom'
const PopupContent = ({copied}) => {
  return  createPortal (
    <div>
      {copied && <div class ={{position:'absolute',bottom:'3rem'}}>Copy to Clipboard</div>}
    </div>,
    document.querySelector('#popup-content')
  )
}

export default PopupContent
