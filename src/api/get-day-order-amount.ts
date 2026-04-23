import { api } from '@/lib/axios'

export interface GetDayOrderAmountResponse {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrderAmount() {
  const response = await api.get<GetDayOrderAmountResponse>(
    `/metrics/day-orders-amount`,
  )
  return response.data
}
