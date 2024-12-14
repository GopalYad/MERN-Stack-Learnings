import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import PropsReview from './03-Props/PropsReview'

import AppConditional from './04-Conditional-Rendering/AppConditional'
import StyleApp from './05-styling-in-react/StyleApp'
import ProfileCard from './05-styling-in-react/ProfileCard'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App/> */}
   {/* <AppConditional/> */}
   {/* <PropsReview/> */}
   <StyleApp/>
 
  </StrictMode>,
)
