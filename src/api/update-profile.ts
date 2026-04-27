import { api } from '@/lib/axios'

export interface UpdateProfileBody {
  name: string
  description: string | null
}

export async function UpdateProfile({ name, description }: UpdateProfileBody) {
  // throw new Error()
  await api.put('/profile', { name, description })
  /*
  await new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Erro ao atualizar perfil')), 1000)
  })
    */
}
