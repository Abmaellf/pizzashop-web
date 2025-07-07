import './index.css'

// import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { Router } from './router'

export function App() {
  return (
    <BrowserRouter>
      {/* <HelmetProvider> */}
      {/* <Helmet titleTemplate="%s | Pizza.Shop" /> */}
      <ThemeProvider defaultTheme="dark" storageKey="pizza-shop-theme">
        <Toaster richColors />
        <Router />
        {/* </HelmetProvider> */}
      </ThemeProvider>
    </BrowserRouter>
  )
}
