import { Link } from 'react-router-dom'

interface ErrorPageProps {
  error?: Error | null
}

export function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold"> Whoops, algo aconteceu...</h1>
      <p className="text-accent-foreground">
        {' '}
        Um error aconteceu na aplicação, abaixo você encontra mais detalhes
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
