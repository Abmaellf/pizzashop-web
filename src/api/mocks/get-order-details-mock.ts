import { http, HttpResponse } from 'msw'

import {
  type GetOrdersDetailsParams,
  type GetOrdersDetailsResponse,
} from '../get-orders-details'

export const getOrderDetailsMock = http.get<
  GetOrdersDetailsParams,
  never,
  GetOrdersDetailsResponse
>('/orders/:orderId', async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Customer 1',
      email: 'customer@example.com',
      phone: '11999999999',
    },
    status: 'processing',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 4200,
        quantity: 1,
        product: {
          name: 'Pizza Calabresa',
        },
      },
      {
        id: 'order-item-2',
        priceInCents: 1000,
        quantity: 2,
        product: {
          name: 'Coca-cola',
        },
      },
    ],
    totalInCents: 6200,
  })
})
