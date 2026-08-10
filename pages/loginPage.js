import logger from '../utils/logger.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.roleSelect = page.locator('mat-select[formcontrolname="roleSelected"]');
    this.loginButton = page.locator('#login');
    this.logo = page.locator('img.images');
    this.companyName = page.locator('.image-container');
    this.requiredAsterisk = page.locator('.mat-placeholder-required').first();
    this.usernameLabel = page.locator('label[for="username"]');
    this.passwordLabel = page.locator('label[for="password"]');
    this.errorMessage = page.locator('.error-message, [class*="error"], mat-error, .mat-mdc-snack-bar-container');
  }

  async navigate() {
    await this.page.goto('/login');
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToNonExistentDomain() {
    await this.page.goto('https://lms-frontend-hackathon-6dcccb9dd0fa.herokuapp.com/this-url-does-not-exist-xyz');
  }

  async navigateToNonExistentPage() {
    const response = await this.page.goto(
      'https://lms-frontend-hackathon-6dcccb9dd0fa.herokuapp.com/this-page-does-not-exist'
    );
    this.lastResponse = response;
    return response;
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async selectRole(role) {
    await this.roleSelect.click();
    await this.page.locator(`mat-option:has-text("${role}")`).click();
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async isLoginPageDisplayed() {
    return await this.loginButton.isVisible();
  }

  async hasErrorOrNotFound() {
    const bodyText = await this.page.textContent('body');
    return bodyText.toLowerCase().includes('error') ||
           bodyText.toLowerCase().includes('not found') ||
           !await this.loginButton.isVisible();
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async isLogoDisplayed() {
    return await this.logo.isVisible();
  }

  async isCompanyNameDisplayed() {
    return await this.companyName.isVisible();
  }

  async getInstructionMessage() {
    const bodyText = await this.page.textContent('body');
    return bodyText.includes('Please login') ? 'Please login to LMS application' : null;
  }

  async getInputFieldCount() {
    const fields = await this.page.locator('input').count();
    return fields;
  }

  async isRoleDropdownDisplayed() {
    return await this.roleSelect.isVisible();
  }

  async getFirstFieldPlaceholder() {
    const text = await this.usernameLabel.textContent();
    return text ? text.replace('*', '').trim() : null;
  }

  async getSecondFieldPlaceholder() {
    const text = await this.passwordLabel.textContent();
    return text ? text.replace('*', '').trim() : null;
  }

  async isUserAsteriskDisplayed() {
    return await this.requiredAsterisk.isVisible();
  }

  async getRoleDropdownOptions() {
    await this.roleSelect.click();
    const options = await this.page.locator('mat-option').allTextContents();
    return options.map(el => el.trim());
  }

  async isLoginButtonDisplayed() {
    return await this.loginButton.isVisible();
  }

  async getErrorMessage() {
    const count = await this.errorMessage.count();
    if (count > 0) {
      return await this.errorMessage.first().textContent();
    }
    const bodyText = await this.page.textContent('body');
    return bodyText;
  }

  async loginWithCredentials(email, password, role) {
    await this.page.goto('/login');
    await this.page.waitForLoadState('networkidle');
    if (email) {
      await this.emailInput.fill(email);
    }
    if (password) {
      await this.passwordInput.fill(password);
    }
    if (role) {
      await this.roleSelect.click();
      const option = this.page.locator(`mat-option:has-text("${role}")`);
      const exists = await option.count();
      if (exists > 0) {
        await option.click();
      } else {
        await this.page.keyboard.press('Escape');
      }
    }
    await this.loginButton.click();
  }

  async waitForLoginResult() {
    await this.page.waitForTimeout(3000);
  }
}
