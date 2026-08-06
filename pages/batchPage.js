
export class BatchPage {
  constructor(page) {
    this.page = page;
    this.batchPageHeader = page.locator("getByText('Batches')");
    this.manageBatchPageHeader = page.locator("getByText('Manage Batch')");
  }

  async clickBatchPageHeader() {
    await this.batchPageHeader.click();
  }
  async isManageBatchPageDisplayed() {
    return await this.manageBatchPageHeader.isVisible();
  }
}
