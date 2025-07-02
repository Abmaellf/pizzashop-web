import './index.css'

// import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

import { Router } from './router'

export function App() {
  return (
    <BrowserRouter>
      {/* <HelmetProvider> */}
      {/* <Helmet titleTemplate="%s | Pizza.Shop" /> */}
      <Toaster richColors />
      <Router />
      {/* </HelmetProvider> */}
    </BrowserRouter>
  )
}
