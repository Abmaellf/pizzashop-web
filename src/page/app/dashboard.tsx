// import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'

export function Dashboard() {
  return (
    <>
      {/* <Helmet title="Dashboard" /> */}
      <h1> Dashboard </h1>

      <div className="flex h-screen items-center justify-center">
        <Button> Enviar </Button>
      </div>
    </>
  )
}
