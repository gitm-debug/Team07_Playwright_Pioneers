export class LogoutPage {
  constructor(page) {
    this.page = page;
    this.logoutButton = page.getByText('Logout');
  }

  async clickLogout() {
    await this.logoutButton.click();
  }

  async isOnLoginPage() {
    await this.page.waitForURL(url => url.toString().includes('/login'), { timeout: 10000 });
    return this.page.url().includes('/login');
  }
}
