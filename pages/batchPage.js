
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
    this.batchNameHeader = page.getByRole('columnheader', { name: 'Batch Name' });
    this.batchDescriptionHeader = page.getByRole('columnheader', { name: 'Batch Description' });
    this.batchStatusHeader = page.getByRole('columnheader', { name: 'Batch Status' });
    this.noOfClassesHeader = page.getByRole('columnheader', { name: 'No Of Classes' });
    this.programNameHeader = page.getByRole('columnheader', { name: 'Program Name' });
    this.editDeleteHeader = page.getByRole('columnheader', { name: 'Edit / Delete' });
    this.checkboxOnHeader = page.getByRole('checkbox').nth(1);
    this.batchNameHeaderSortIcon = page.getByRole('columnheader', { name: 'Batch Name' }).locator('i');
    this.batchDescriptionHeaderSortIcon = page.getByRole('columnheader', { name: 'Batch Description' }).locator('i');
    this.batchStatusHeaderSortIcon = page.getByRole('columnheader', { name: 'Batch Status' }).locator('i');
    this.noOfClassesHeaderSortIcon = page.getByRole('columnheader', { name: 'No Of Classes' }).locator('i');
    this.programNameHeaderSortIcon = page.getByRole('columnheader', { name: 'Program Name' }).locator('i');

    this.batchDetailsDialog = page.getByText('Batch Details');
    this.batchNameField = page.getByText('Batch Name*');
    this.descriptionField = page.getByText('Description', { exact: true });
    this.noOfClassesField = page.getByText('Number of Classes *');
    this.programNameField = page.getByText('Program Name *');
    this.dropdownUnderProgramName = page.locator('.p-autocomplete-dropdown');
    this.statusField = page.getByText('Status : *');
    this.activeRadioButton = page.locator('.p-radiobutton-box').first();
    this.inactiveRadioButton = page.locator('div:nth-child(3) > #batchStatus > .p-radiobutton > .p-radiobutton-box');

    this.batchNameSortHeader = 'th[psortablecolumn="batchName"]';
    this.batchDescriptionSortHeader = 'th[psortablecolumn="batchDescription"]';
    this.batchStatusSortHeader = 'th[psortablecolumn="batchStatus"]';
    this.batchNoOfClassesSortHeader = 'th[psortablecolumn="batchNoOfClasses"]';

    this.batchNamePrefixBox = page.locator('#batchProg');
    this.batchNameSuffixBox = page.getByRole('textbox', { name: 'Batch Name *' });
    this.batchNameBox = page.locator('#batchName').nth(1);
    this.descriptionTextBox = page.getByRole('textbox', { name: 'Description' });
    this.noOfClassesInputBox = page.getByRole('spinbutton', { name: 'Number of Classes *' });
    this.errorMsgUnderBatchName = page.getByText('This field accept only');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    //this.failPopup = page.getByText('FailedBatch Creation Failed');
    this.failPopup = page.getByText('Failed', { exact: true });
    this.successPopup = page.getByText('Successful', { exact: true });
    //this.successPopup = page.getByText('SuccessfulBatch Created');
    this.statusErrorPopup = page.getByText('Status is required.');
    this.dialogCloseButton = page.getByLabel('Batch Details').getByRole('button').filter({ hasText: /^$/ });

    this.confirmAlertBoxForDelete = page.locator('div').filter({ hasText: /^Confirm$/ });
    this.yesButtonForDelete = page.getByRole('button', { name: 'Yes' });
    this.noButtonForDelete = page.getByRole('button', { name: 'No' });
    this.closeButtonForDelete = page.locator('p-confirmdialog').getByRole('button').filter({ hasText: /^$/ });

    this.searchBox = page.getByRole('textbox', { name: 'Search...' });
  }

  async navigate() {
    await this.page.goto('/batch');
    await this.page.waitForLoadState('networkidle');
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

  async clickBatchNameArrow() {
    await this.page.click(this.batchNameSortHeader);
  }

  async clickBatchDescriptionArrow() {
    await this.page.click(this.batchDescriptionSortHeader);
  }

  async clickBatchStatusArrow() {
    await this.page.click(this.batchStatusSortHeader);
  }

  async clickNoOfClassesArrow() {
    await this.page.click(this.batchNoOfClassesSortHeader);
  }

  async getBatchNames() {
    return await this.page.$$eval('table tbody tr td:nth-child(2)', els =>
      els.map(el => el.textContent.trim())
    );
  }

  async getBatchDescriptions() {
    return await this.page.$$eval('table tbody tr td:nth-child(3)', els =>
      els.map(el => el.textContent.trim())
    );
  }

  async getBatchStatuses() {
    return await this.page.$$eval('table tbody tr td:nth-child(4)', els =>
      els.map(el => el.textContent.trim())
    );
  }

  async getNoOfClasses() {
    return await this.page.$$eval('table tbody tr td:nth-child(5)', els =>
      els.map(el => el.textContent.trim())
    );
  }

  isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].localeCompare(arr[i + 1]) > 0) return false;
    }
    return true;
  }

  isSortedDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].localeCompare(arr[i + 1]) < 0) return false;
    }
    return true;
  }

  isSortedAscendingNumeric(arr) {
    const nums = arr.map(Number);
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) return false;
    }
    return true;
  }

  isSortedDescendingNumeric(arr) {
    const nums = arr.map(Number);
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) return false;
    }
    return true;
  }

  async selectProgramName(programName) {
    await this.dropdownUnderProgramName.click();
    await this.page.locator('.p-autocomplete-input').fill(programName);
    const programOption = this.page.locator('.p-autocomplete-item').filter({ hasText: programName });
    await programOption.waitFor({ state: 'visible'});
    await programOption.click();
  }
  async clickSaveButton() {
    await this.saveButton.click();
  }
  async clickCancelButton() {
    await this.cancelButton.click();
  }
  async clickDialogCloseButton() {
    await this.dialogCloseButton.click();
  }

  async verifyBatchInSerchBox(batchNamePrefix) {
    try {
      await this.page.waitForTimeout(1000);
      const row = this.page.locator('table tbody tr').filter({ hasText: batchNamePrefix });
      const count = await row.count();

      if (count === 0) {
        throw new Error(`Batch "${batchNamePrefix}" not found in search results`);
      }

      const cells = row.first().locator('td');
      const batchName = await cells.nth(1).textContent();
      const batchdescription = await cells.nth(2).textContent();
      const batchstatus = await cells.nth(3).textContent();
      const noOfClasses = await cells.nth(4).textContent();
      const programName = await cells.nth(5).textContent();
      return { batchName, batchdescription, batchstatus, noOfClasses, programName };
    } catch (error) {
      throw new Error(`Program not found: ${error.message}`);     
    }
  }
}
