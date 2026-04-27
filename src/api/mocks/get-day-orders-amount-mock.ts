import { http, HttpResponse } from 'msw'

import type { GetDayOrderAmountResponse } from '../get-day-order-amount'

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  GetDayOrderAmountResponse
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})
