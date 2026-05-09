import { expect, type Page, test } from '@playwright/test'

async function openAccountMenu(page: Page) {
  await page.goto('/dashboard', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: /Pizza Shop/ }).click()
}

test('update profile successfully', async ({ page }) => {
  await openAccountMenu(page)

  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Pizza Shop')
  await page.getByLabel('Descrição').fill('A melhor pizzaria da cidade')
  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await page.waitForTimeout(2000)

  expect(page.getByRole('button', { name: 'Pizza Shop' })).toBeVisible()
})
