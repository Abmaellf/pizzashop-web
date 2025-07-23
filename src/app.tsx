import './index.css'

import { QueryClientProvider } from '@tanstack/react-query'
// import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { queryClient } from './lib/react-query'
import { Router } from './router'

export function App() {
  return (
    <BrowserRouter>
      {/* <HelmetProvider> */}
      {/* <Helmet titleTemplate="%s | Pizza.Shop" /> */}
      <ThemeProvider defaultTheme="dark" storageKey="pizza-shop-theme">
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
        {/* </HelmetProvider> */}
      </ThemeProvider>
    </BrowserRouter>
  )
}
