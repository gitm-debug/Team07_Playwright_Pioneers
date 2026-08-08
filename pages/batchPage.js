
export class BatchPage {
  constructor(page) {
    this.page = page;
    this.batchPageHeader = page.getByText('Batches');
    this.manageBatchPageHeader = page.getByText('Manage Batch');
    this.batchTab = page.getByRole('button', { name: 'Batch' });
    this.batchSubMenu = page.getByRole('menuitem', { name: 'Add New Batch' });
    this.deleteIcon = page.locator('mat-card-title').getByRole('button');
    this.firstPageButton = page.locator('button.p-paginator-first');
    this.previousPageButton = page.locator('button.p-paginator-prev');
    this.nextPageButton = page.locator('button.p-paginator-next');
    this.lastPageButton = page.locator('button.p-paginator-last');
    this.batchTableRows = page.locator('tbody tr');
    this.editButtons = page.locator('tbody tr button:has(.pi-pencil)');
    this.batchNameHeader = page.getByRole('columnheader', { name: 'Batch Name ' });
    this.batchDescriptionHeader = page.getByRole('columnheader', { name: 'Batch Description ' });
    this.batchStatusHeader = page.getByRole('columnheader', { name: 'Batch Status ' });
    this.noOfClassesHeader = page.getByRole('columnheader', { name: 'No Of Classes ' });
    this.programNameHeader = page.getByRole('columnheader', { name: 'Program Name ' });
    this.editDeleteHeader = page.getByRole('columnheader', { name: 'Edit / Delete' });
    this.checkboxOnHeader = page.getByRole('checkbox').nth(1);
    this.batchNameHeaderSortIcon = page.getByRole('columnheader', { name: 'Batch Name ' }).locator('i');
    this.batchDescriptionHeaderSortIcon = page.getByRole('columnheader', { name: 'Batch Description ' }).locator('i');
    this.batchStatusHeaderSortIcon = page.getByRole('columnheader', { name: 'Batch Status ' }).locator('i');
    this.noOfClassesHeaderSortIcon = page.getByRole('columnheader', { name: 'No Of Classes ' }).locator('i');
    this.programNameHeaderSortIcon = page.getByRole('columnheader', { name: 'Program Name ' }).locator('i');

    this.batchNameField = page.getByText('Batch Name*');
  }

  async clickBatchPageHeader() {
    await this.batchPageHeader.click();
  }
  async isManageBatchPageDisplayed() {
    return await this.manageBatchPageHeader.isVisible();
  }
  async clickBatchTab() {
    await this.batchTab.click();
  }
  async isBatchSubMenuDisplayed() {
    return await this.batchSubMenu.isVisible();
  }
  async clickAddNewBatchSubMenu() {
    await this.batchSubMenu.click();
  }
  getEditButtonForRow(rowIndex) {
    return this.batchTableRows.nth(rowIndex).locator('button:has(.pi-pencil)');
  }
  getDeleteButtonForRow(rowIndex) {
    return this.batchTableRows.nth(rowIndex).locator('button:has(.pi-trash)');
  }
  getCheckboxForRow(rowIndex) {
    return this.batchTableRows.nth(rowIndex).locator('p-tablecheckbox');
  }
}
