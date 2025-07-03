import { Route, Routes } from 'react-router-dom'

import { AppLayout } from './page/_layouts/app'
import { AuthLayout } from './page/_layouts/auth'
import { Dashboard } from './page/app/dashboard'
import { Pedidos } from './page/app/pedidos'
import { SignIn } from './page/auth/sign-in'
import { SignUp } from './page/auth/sign-up'

export function Router() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Pedidos />} />
      </Route>
    </Routes>
  )
}
