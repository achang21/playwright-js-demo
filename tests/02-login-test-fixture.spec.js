import { test, expect } from '../fixtures/all-fixtures.js'

test.describe('Login Tests - Fixture', () => {
  test('Login with standard user @fixtureDemo', async ({ loginPage, productsPage }) => {
    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce')
    await expect(productsPage.isProductsLabelVisible()).toBeTruthy()
  })

  test('Login with locked out user @fixtureDemo', async ({ loginPage }) => {
    const errorMessage = 'Epic sadface: Sorry, this user has been locked out.'

    await loginPage.goto()
    await loginPage.login('locked_out_user', 'secret_sauce')

    await expect(loginPage.isErrorMessageVisible(errorMessage)).toBeTruthy()
  })
})
