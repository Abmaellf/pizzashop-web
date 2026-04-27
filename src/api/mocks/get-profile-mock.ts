import { http, HttpResponse } from 'msw'

import type { getProfile } from '../get-profile'

type GetProfileResponse = Awaited<ReturnType<typeof getProfile>>

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'user-1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: null,
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
