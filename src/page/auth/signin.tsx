// import { Helmet } from 'react-helmet-async'

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
  // senha: z.string().min(6).max(10),
})

type SignInForm = z.infer<typeof signInForm>

export function Signin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignin(data: SignInForm) {
    try {
      console.log(data)
      // throw new Error()
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Enviamos um link de autenticação para o seu e-mail', {
        // description: 'Descriptio',
        action: {
          label: 'Reenviar',
          onClick: () => {
            handleSignin(data)
          },
        },
      })
    } catch {
      toast.error('Credenciais inválidas')
    }
  }

  return (
    <>
      {/* <Helmet title="Login" /> */}
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-muted-foreground text-sm">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSignin)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email"> Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
              {/* <Input id="senha" type="password" {...register('senha')} /> */}
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
