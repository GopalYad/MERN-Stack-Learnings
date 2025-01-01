import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import PropsReview from './03-Props/PropsReview'

import AppConditional from './04-Conditional-Rendering/AppConditional'
import StyleApp from './05-styling-in-react/StyleApp'
import ProfileCard from './05-styling-in-react/ProfileCard'
import EventApp from './06-Events/EventApp'
import StateHooksApp from './07-state-and-hooks/StateHooksApp'
import ShoppingCartApp from './Projects/Shopping-Cart-Application/ShoppingCartApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
   {/* <AppConditional/> */}
   {/* <PropsReview/> */}
   {/* <StyleApp/> */}
   {/* <EventApp/> */}
   {/* <StateHooksApp/> */}
   {/* <ShoppingCartApp/> */}
  </StrictMode>,
)
