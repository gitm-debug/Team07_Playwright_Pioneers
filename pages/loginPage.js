import logger from '../utils/logger.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = '#username';
    this.passwordInput = '#password';
    this.roleSelect = 'mat-select[formcontrolname="roleSelected"]';
    this.loginButton = '#login';
  }

  async navigate() {
    await this.page.goto('/login');
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToInvalidUrl() {
    await this.page.goto('/invalid-page');
    await this.page.waitForLoadState('networkidle');
  }

  async enterEmail(email) {
    await this.page.fill(this.emailInput, email);
  }

  async enterPassword(password) {
    await this.page.fill(this.passwordInput, password);
  }

  async selectRole(role) {
    await this.page.click(this.roleSelect);
    await this.page.click(`mat-option:has-text("${role}")`);
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }

  async isLoginPageDisplayed() {
    return await this.page.isVisible(this.loginButton);
  }

  async hasErrorOrNotFound() {
    const bodyText = await this.page.textContent('body');
    return bodyText.toLowerCase().includes('error') ||
           bodyText.toLowerCase().includes('not found') ||
           !await this.page.isVisible(this.loginButton);
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async isLogoDisplayed() {
    return await this.page.isVisible('.login-logo');
  }

  async isCompanyNameDisplayed() {
    return await this.page.isVisible('.company-name');
  }

  async getInstructionMessage() {
    const bodyText = await this.page.textContent('body');
    return bodyText.includes('Please login') ? 'Please login to LMS application' : null;
  }

  async getInputFieldCount() {
    const fields = await this.page.$$('input');
    return fields.length;
  }

  async isRoleDropdownDisplayed() {
    return await this.page.isVisible(this.roleSelect);
  }

  async getFirstFieldPlaceholder() {
    return await this.page.getAttribute(this.emailInput, 'placeholder');
  }

  async getSecondFieldPlaceholder() {
    return await this.page.getAttribute(this.passwordInput, 'placeholder');
  }

  async isUserAsteriskDisplayed() {
    return await this.page.isVisible('.required');
  }

  async getRoleDropdownOptions() {
    await this.page.click(this.roleSelect);
    return await this.page.$$eval('mat-option', els => els.map(el => el.textContent.trim()));
  }

  async isLoginButtonDisplayed() {
    return await this.page.isVisible(this.loginButton);
  }

  async getErrorMessage() {
    const errorEl = await this.page.$('.error-message, [class*="error"], mat-error, .mat-mdc-snack-bar-container');
    if (errorEl) {
      return await errorEl.textContent();
    }
    const bodyText = await this.page.textContent('body');
    return bodyText;
  }

  async loginWithCredentials(email, password, role) {
    await this.page.goto('/login');
    await this.page.waitForLoadState('networkidle');
    if (email) {
      await this.page.fill(this.emailInput, email);
    }
    if (password) {
      await this.page.fill(this.passwordInput, password);
    }
    if (role) {
      await this.page.click(this.roleSelect);
      const option = this.page.locator(`mat-option:has-text("${role}")`);
      const exists = await option.count();
      if (exists > 0) {
        await option.click();
      } else {
        await this.page.keyboard.press('Escape');
      }
    }
    await this.page.click(this.loginButton);
  }

  async waitForLoginResult() {
    await this.page.waitForTimeout(3000);
  }
}
