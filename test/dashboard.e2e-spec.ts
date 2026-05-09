import { expect, test } from '@playwright/test'

test('Display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5%em relação ao mês passado')).toBeVisible()
})

test('Display month amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200', { exact: true })).toBeVisible()
  expect(page.getByText('7%em relação ao mês passado')).toBeVisible()
})

test('Display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('-5', { exact: true })).toBeVisible()
  expect(page.getByText('-5%em relação ao mês passado')).toBeVisible()
})

test('Display month revenue orders  metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 200,00', { exact: true })).toBeVisible()
  expect(page.getByText('+10%em relação ao mês passado')).toBeVisible()
})
