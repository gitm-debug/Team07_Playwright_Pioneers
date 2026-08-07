
export class BatchPage {
  constructor(page) {
    this.page = page;
    this.batchPageHeader = page.getByText('Batches');
    this.manageBatchPageHeader = page.getByText('Manage Batch');
    this.batchTab = page.getByRole('button', { name: 'Batch' });
    this.batchSubMenu = page.getByRole('menuitem', { name: 'Add New Batch' });

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
}
