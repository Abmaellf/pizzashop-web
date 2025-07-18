import { Search, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const orderTableFiltersSchema = z.object({
  id: z.string(),
  name: z.string(),
})

type OrderTableFiltersSchema = z.infer<typeof orderTableFiltersSchema>

export default function OrderTableFilters() {
  const { register, handleSubmit } = useForm<OrderTableFiltersSchema>()

  function handleChangeFilter(data: OrderTableFiltersSchema) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleChangeFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold"> Filtros: </span>

      <Input
        placeholder="ID do pedido"
        className="h-8 w-auto"
        {...register('id')}
      />
      <Input
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
        {...register('name')}
      />

      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all"> Todos Status</SelectItem>
          <SelectItem value="pending"> Pedente </SelectItem>
          <SelectItem value="canceled"> Cancelado </SelectItem>
          <SelectItem value="processing"> Em preparo </SelectItem>
          <SelectItem value="delivering"> Em entrega </SelectItem>
          <SelectItem value="delivered"> Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary" size={'xs'}>
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant="outline" size={'xs'}>
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
