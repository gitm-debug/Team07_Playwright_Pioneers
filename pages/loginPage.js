import logger from '../utils/logger.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = '#username';
    this.passwordInput = '#password';
    this.roleSelect = 'mat-select[formcontrolname="roleSelected"]';
    this.loginButton = '#login';
    this.errorMessage = '#errormessage';
  }

  async navigate() {
    logger.step('Navigating to login page');
    await this.page.goto('/login');
    await this.page.waitForLoadState('networkidle');
    logger.info('Login page loaded');
  }

  async navigateToInvalidUrl() {
    logger.step('Navigating to invalid URL');
    await this.page.goto('/invalid-page');
    await this.page.waitForLoadState('networkidle');
    logger.info('Invalid URL loaded');
  }

  async enterEmail(email) {
    logger.step(`Entering email: ${email}`);
    await this.page.fill(this.emailInput, email);
  }

  async enterPassword(password) {
    logger.step('Entering password');
    await this.page.fill(this.passwordInput, password);
  }

  async selectRole(role) {
    logger.step(`Selecting role: ${role}`);
    await this.page.click(this.roleSelect);
    await this.page.click(`mat-option:has-text("${role}")`);
  }

  async clickLogin() {
    logger.step('Clicking login button');
    await this.page.click(this.loginButton);
  }

  async isLoginPageDisplayed() {
    logger.step('Verifying login page is displayed');
    return await this.page.isVisible(this.loginButton);
  }

  async hasErrorOrNotFound() {
    logger.step('Checking for error or not found page');
    const url = this.page.url();
    const bodyText = await this.page.textContent('body');
    const hasError = bodyText.toLowerCase().includes('error') ||
                     bodyText.toLowerCase().includes('not found') ||
                     bodyText.toLowerCase().includes('404') ||
                     !await this.page.isVisible(this.loginButton);
    logger.info(`URL: ${url}, Has error: ${hasError}`);
    return hasError;
  }

  async getPageTitle() {
    logger.step('Getting page title');
    const title = await this.page.title();
    logger.info(`Page title: ${title}`);
    return title;
  }
}
