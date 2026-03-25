/**
 * Flipkart Test Utilities
 * Reusable helper functions for Flipkart testing
 */

export class FlipkartUtils {
  constructor(page) {
    this.page = page;
    this.baseURL = 'https://www.flipkart.com';
  }

  /**
   * Navigate to Flipkart homepage
   */
  async goToHomepage() {
    await this.page.goto(this.baseURL, { waitUntil: 'networkidle' });
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Search for products on Flipkart
   * @param {string} searchTerm - What to search for
   */
  async searchProduct(searchTerm) {
    const searchBox = this.page.locator('input[placeholder*="Search"]').first();
    await searchBox.waitFor({ state: 'visible', timeout: 5000 });
    await searchBox.fill(searchTerm);
    await searchBox.press('Enter');
    
    // Wait for search results
    await this.page.waitForURL(/search/, { timeout: 10000 });
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click on first product in search results matching criteria
   * @param {string} criteria - Text to match in product title
   */
  async clickFirstProduct(criteria) {
    await this.page.waitForSelector('[class*="product"]', { timeout: 10000 });
    
    const firstProduct = this.page.locator('a').filter({ 
      has: this.page.locator(`text=/${criteria}/i`) 
    }).first();
    
    await firstProduct.click();
    await this.page.waitForURL(/p\/itm/, { timeout: 10000 });
  }

  /**
   * Scroll to a specific position
   * @param {number} y - Y position to scroll to
   */
  async scrollTo(y = 400) {
    await this.page.evaluate((scrollY) => {
      window.scrollBy(0, scrollY);
    }, y);
    await this.page.waitForTimeout(300);
  }

  /**
   * Click Buy/Purchase button
   * @param {string} price - Price text shown on button (e.g., "₹42,740")
   */
  async clickBuyButton(price) {
    const buyButton = this.page.locator(`div:has-text("Buy at ${price}")`).first();
    await buyButton.scrollIntoViewIfNeeded();
    await buyButton.click({ force: true, timeout: 5000 });
    await this.page.waitForTimeout(500);
  }

  /**
   * Navigate to shopping cart
   */
  async goToCart() {
    const cartLink = this.page.getByRole('link', { name: /cart/i }).last();
    await cartLink.waitFor({ state: 'visible', timeout: 5000 });
    await cartLink.click();
    await this.page.waitForURL(/viewcart/, { timeout: 10000 });
  }

  /**
   * Verify product is visible
   * @param {string} productText - Text to verify (e.g., "DELL 15")
   */
  async verifyProductVisible(productText) {
    await this.page.locator(`text=/${productText}/i`).waitFor({ state: 'visible', timeout: 5000 });
  }

  /**
   * Get product price
   * @returns {Promise<string>} Price text
   */
  async getProductPrice() {
    const priceElement = this.page.locator('text=/₹[0-9,]+/').first();
    return await priceElement.textContent();
  }

  /**
   * Get product rating
   * @returns {Promise<string>} Rating text
   */
  async getProductRating() {
    const ratingElement = this.page.locator('text=/[0-9]\\.[0-9].*star/i').first();
    return await ratingElement.textContent().catch(() => 'N/A');
  }

  /**
   * Wait for and click element by text
   * @param {string} text - Text content of element
   */
  async clickByText(text) {
    await this.page.locator(`text=${text}`).first().click();
  }

  /**
   * Take screenshot
   * @param {string} filename - Screenshot filename
   */
  async takeScreenshot(filename) {
    await this.page.screenshot({ path: `./screenshots/${filename}.png` });
  }
}
