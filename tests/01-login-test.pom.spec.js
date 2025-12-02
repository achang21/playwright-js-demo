import { test, expect } from '@playwright/test'

import { LoginPage } from '../pages/LoginPage.js'
import { ProductsPage } from '../pages/ProductsPage.js'

test.describe('Login Tests - POM @pomDemo', () => {
  test('Login with standard user', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const productsPage = new ProductsPage(page)

    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce')
    await expect(productsPage.isProductsLabelVisible()).toBeTruthy()
  })

  test('Login with locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login('locked_out_user', 'secret_sauce')

    const errorMessage = 'Epic sadface: Sorry, this user has been locked out.'
    await expect(loginPage.isErrorMessageVisible(errorMessage)).toBeTruthy()
  })
})
