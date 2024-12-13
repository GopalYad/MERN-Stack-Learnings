import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import PropsReview from './03-Props/PropsReview'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App/> */}
   <PropsReview/>
  </StrictMode>,
)
