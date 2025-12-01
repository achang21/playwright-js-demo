import { test, expect } from '@playwright/test'

import { LoginPage } from '../pages/LoginPage.js'
import { ProductsPage } from '../pages/ProductsPage.js'

test.describe('Login Tests', () => {
  test('Login with standard user', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const productsPage = new ProductsPage(page)

    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce')
    await expect(productsPage.isProductsLabelVisible()).toBeTruthy()
  })
})
