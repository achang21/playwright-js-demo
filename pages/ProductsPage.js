export class ProductsPage {
  constructor(page) {
    this.page = page
    this.burgerMenu = page.getByRole('button', { name: 'Open Menu' })
    this.productsLabel = page.locator('[data-test="title"]')
    this.headerLabel = page.locator('.app_logo')
  }

  async expandBurgerMenu() {
    await this.burgerMenu.click()
  }
  async isProductsLabelVisible() {
    return await this.productsLabel.isVisible()
  }
}
