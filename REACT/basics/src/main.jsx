import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import PropsReview from './03-Props/PropsReview'

import AppConditional from './04-Conditional-Rendering/AppConditional'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App/> */}
   <AppConditional/>
   {/* <PropsReview/> */}
  </StrictMode>,
)
