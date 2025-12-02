import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { ProductsPage } from '../pages/ProductsPage.js'

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page))
  },
})

export { expect } from '@playwright/test'
