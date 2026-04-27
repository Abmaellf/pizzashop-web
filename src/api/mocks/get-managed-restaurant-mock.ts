import { http, HttpResponse } from 'msw'

import type { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'restaurant-1',
    name: 'Pizza Shop',
    createdAt: new Date(),
    updatedAt: new Date(),
    description: 'The best pizza in town',
    managerId: 'user-1',
  })
})
