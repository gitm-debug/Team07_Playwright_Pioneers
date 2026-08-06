
export class BatchPage {
  constructor(page) {
    this.page = page;
    this.batchPageHeader = page.getByText('Batches');
    this.manageBatchPageHeader = page.getByText('Manage Batch');
  }

  async clickBatchPageHeader() {
    await this.batchPageHeader.click();
  }
  async isManageBatchPageDisplayed() {
    return await this.manageBatchPageHeader.isVisible();
  }
}