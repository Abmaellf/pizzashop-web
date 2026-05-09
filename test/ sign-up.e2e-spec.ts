import { expect, test } from '@playwright/test'

test('signup in successfully', async ({ page }) => {
  await page.goto('/signup', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Phone').fill('(11) 99999-9999')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  await page.waitForTimeout(2000)

  const toast = page.getByText('Restaurante cadastrado com sucesso!')
  expect(toast).toBeVisible()
})

test('sigup with error', async ({ page }) => {
  await page.goto('/signup', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop 2')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Phone').fill('(11) 99999-9999')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  await page.waitForTimeout(2000)

  const toast = page.getByText('Erro ao cadastrar restaurante')

  await page.waitForTimeout(2000)
  expect(toast).toBeVisible()
})

test('Navigate to new login page', async ({ page }) => {
  await page.goto('/signup', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  // await expect(page).toHaveURL('/restaurants/new')

  expect(page.url()).toContain('/signin')
})
