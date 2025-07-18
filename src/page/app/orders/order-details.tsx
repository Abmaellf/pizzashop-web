import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import React from 'react'

import { DialogContent, DialogHeader } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle> Pedido: 08707233 </DialogTitle>
        <DialogDescription> Detalhes do pedido </DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground"> Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="text-muted-foreground font-medium">
                    Pedente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground"> Cliente</TableCell>
              <TableCell className="flex justify-end">
                Abmael de Lima Ferreira
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground"> Telefone</TableCell>
              <TableCell className="flex justify-end">(65) 9999-9999</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground"> E-mail</TableCell>
              <TableCell className="flex justify-end">
                {' '}
                abmael@abmael.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                {' '}
                Realizado há{' '}
              </TableCell>
              <TableCell className="flex justify-end">Há 3 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>Produtos</TableRow>
            <TableHead className="text-right"> Qtd. </TableHead>
            <TableHead className="text-right"> Preço </TableHead>
            <TableHead className="text-right"> Sub Total </TableHead>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell> Pizza Pepperoni Familia</TableCell>
              <TableCell className="text-right"> R$ 69,90</TableCell>
              <TableCell className="text-right"> R$ 139,80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell> Pizza Pepperoni Familia</TableCell>
              <TableCell className="text-right"> R$ 69,90</TableCell>
              <TableCell className="text-right"> R$ 139,80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell> Pizza Mussarela</TableCell>
              <TableCell className="text-right"> R$ 59,90</TableCell>
              <TableCell className="text-right"> R$ 119,80</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}> Total do pedido </TableCell>
              <TableCell className="text-right font-medium"> 259,00 </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
