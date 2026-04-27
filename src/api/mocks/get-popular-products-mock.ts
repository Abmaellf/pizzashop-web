import { http, HttpResponse } from 'msw'

import type { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza Calabresa', amount: 30 },
    { product: 'Pizza Margherita', amount: 25 },
    { product: 'Pizza Pepperoni', amount: 20 },
    { product: 'Pizza Quatro Queijos', amount: 18 },
    { product: 'Pizza Frango com Catupiry', amount: 15 },
  ])
})
