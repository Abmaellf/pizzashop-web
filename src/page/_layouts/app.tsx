import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <h1> Header em todas as paginas </h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
