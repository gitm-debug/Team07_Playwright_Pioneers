import logger from '../utils/logger.js';

export class ProgramPaginationPage {
  constructor(page) {
    this.page = page;
    this.paginator = page.locator('p-paginator');
    this.firstBtn = page.locator('.p-paginator-first');
    this.prevBtn = page.locator('.p-paginator-prev');
    this.nextBtn = page.locator('.p-paginator-next');
    this.lastBtn = page.locator('.p-paginator-last');
    this.pageNumbers = page.locator('.p-paginator-pages .p-paginator-page');
    this.rangeLabel = page.locator('.p-paginator-current');
    this.tableRows = page.locator('table tbody tr');
    this.tableFirstRow = page.locator('table tbody tr:first-child td:nth-child(2)');
    this.tableLastRow = page.locator('table tbody tr:last-child td:nth-child(2)');
    this.totalText = page.locator('text=/In total there are/i');
    this.programNavBar = page.locator('mat-toolbar button#program, mat-toolbar button:has-text("Program")');
  }

  async navigateToProgram() {
    await this.page.goto('/program');
    await this.page.waitForLoadState('networkidle');
  }

  async clickNextPage() {
    await this.nextBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async clickLastPage() {
    await this.lastBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async clickPrevPage() {
    await this.prevBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async clickFirstPage() {
    await this.firstBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async getFirstRowProgramName() {
    return (await this.tableFirstRow.textContent()).trim();
  }

  async getLastRowProgramName() {
    return (await this.tableLastRow.textContent()).trim();
  }

  async getPaginationText() {
    return (await this.rangeLabel.textContent()).trim();
  }

  async getTotalProgramsText() {
    return (await this.totalText.textContent()).trim();
  }

  async getTableRowCount() {
    return await this.tableRows.count();
  }

  async isNextPageDisabled() {
    return await this.nextBtn.evaluate((el) => el.disabled || el.classList.contains('p-disabled'));
  }

  async isPrevPageDisabled() {
    return await this.prevBtn.evaluate((el) => el.disabled || el.classList.contains('p-disabled'));
  }

  async isFirstPageDisabled() {
    return await this.firstBtn.evaluate((el) => el.disabled || el.classList.contains('p-disabled'));
  }

  async isLastPageDisabled() {
    return await this.lastBtn.evaluate((el) => el.disabled || el.classList.contains('p-disabled'));
  }

  async areAllPaginationButtonsDisabled() {
    return (
      (await this.isFirstPageDisabled()) &&
      (await this.isPrevPageDisabled()) &&
      (await this.isNextPageDisabled()) &&
      (await this.isLastPageDisabled())
    );
  }

  async getCurrentPageNumber() {
    const highlighted = this.pageNumbers.locator('.p-highlight');
    return await highlighted.textContent();
  }

  async getTotalPages() {
    return await this.pageNumbers.count();
  }

  async clickProgramNavBar() {
    await this.programNavBar.first().click();
    await this.page.waitForLoadState('networkidle');
  }
}