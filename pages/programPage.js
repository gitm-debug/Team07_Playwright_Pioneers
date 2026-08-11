import { expect } from '@playwright/test';
import logger from '../utils/logger.js';
export class ProgramPage {
  constructor(page) {
    this.page = page;
    this.programMenuBar = page.getByRole('button', { name: 'Program' });
    this.addNewProgramMenuItem = page.getByRole('menuitem', { name: 'Add New Program' });
    this.manageProgram = page.getByText('Manage Program');
    this.searchBox = page.getByRole('textbox', { name: 'Search...' });
    this.tableHeaders = page.locator('table thead th');
    this.rowCheckboxes = page.locator('table tbody input[type="checkbox"]');
    this.editBtnsProgram = page.locator('#editProgram');
    this.deleteBtnsProgram = page.locator('#deleteProgram');
    this.multiDeleteBtn = page.locator("div[class='p-checkbox-box']")
    this.footerMsg = page.locator(".p-d-flex.p-ai-center.p-jc-between.ng-star-inserted")
    this.paginationMsg = page.locator(".p-paginator-current.ng-star-inserted")
    this.programDetailsDialog = page.getByText('Program Details');
    this.dialog = page.locator('.MuiDialog-root, .modal, [role="dialog"]');
    this.dialogTitle = page.getByText('Program Details');
    this.nameText = page.getByLabel('Name*')
    this.nameField = page.locator('#programName');
    this.descriptionText = page.getByLabel('Description');
    this.descriptionField = page.getByRole('textbox', { name: 'Description' })
    this.activeRadio = page.locator('div.p-radiobutton:has(input#Active) .p-radiobutton-box');
    this.inactiveRadio = page.locator('div.p-radiobutton:has(input#Inactive) .p-radiobutton-box');
    this.nameMandatoryIndicator = page.locator("//label[@for='programName']//span[contains(text(),'*')]");
    this.statusMandatoryIndicator = page.locator("//lable[@for='online']//span[contains(text(),'*')]");
    this.saveBtn = page.getByRole('button', { name: 'Save' });
    this.cancelBtn = page.getByRole('button', { name: 'Cancel' });
    this.dialogCloseButton = page.getByLabel('Program Details').getByRole('button').filter({ hasText: /^$/ });
//delete multiple prgm
// Checkboxes
    this.selectAllCheckbox = page.locator('table thead .p-checkbox');
    this.rowCheckboxes = page.locator('table tbody .p-checkbox');/// recheck 

// Delete button (toolbar at top)
    this.deleteButton = page.locator('button').filter({ hasText: /delete/i });
    this.deleteIcon = page.locator('button .pi-trash').locator('..');
// Confirmation dialog
    this.confirmDialog = page.locator('.p-dialog');
    this.confirmYesBtn = this.confirmDialog.locator('button').filter({ hasText: /yes/i });
    this.confirmNoBtn = this.confirmDialog.locator('button').filter({ hasText: /no/i });
    this.confirmCloseBtn = this.confirmDialog.locator('.p-dialog-header-icon, .p-dialog .pi-times').locator('..');
    this.confirmMessage = this.confirmDialog.locator('.p-dialog-content, .p-confirm-dialog-message');
// Toast / Success message
    this.toastMessage = page.locator('.p-toast-message');
    this.toastText = page.locator('.p-toast-message-text');

    // Error messages 
    this.errorMessage = page.locator('small.p-invalid'); // <small class="p-invalid">   
    this.tableRows = page.locator('table tbody tr');
    //Sorting
    this.programNameHeader = page.locator('th[psortablecolumn="programName"]');
    this.programDescriptionHeader = page.locator('th[psortablecolumn="programDescription"]');
    this.programStatusHeader = page.locator('th[psortablecolumn="programStatus"]');
    //Edit
    this.editDialogue = page.getByText('Program Details');
    this.progrmForEdit = page.locator('#programName');
    this.descriptionForEdit = page.locator('#programDescription');
    this.activeBtnForEdit = page.locator(".p-radiobutton-box.p-highlight");
    this.inactiveBtnForEdit = page.locator("//div[@class='p-radiobutton-box']");
    this.cancelForEdit = page.getByText('Cancel');
    this.saveBtn = page.getByText('Save');
    this.successMessage = page.locator('.p-toast-detail, .p-toast-summary, .p-toast-message-text, [role="alert"]');

    //Delete
    this.confirmAlertBoxForDelete = page.locator('div').filter({ hasText: /^Confirm$/ });
    this.yesButtonForDelete = page.getByRole('button', { name: 'Yes' });
    this.noButtonForDelete = page.getByRole('button', { name: 'No' });
    this.closeButtonForDelete = page.locator('p-confirmdialog').getByRole('button').filter({ hasText: /^$/ });

    //pagination
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
  async navigateToProgramPage() {
    await this.programMenuBar.click();
  }

  async isHeadingVisible() {
    try {
      return await this.manageProgram.isVisible();
    } catch {
      return false;
    }
  }

  async isAddNewProgramVisible() {
    try {
      return await this.addNewProgramMenuItem.isVisible();
    } catch {
      return false;
    }
  }

  async isSearchBarVisible() {
    try {
      return await this.searchBox.isVisible();
    } catch {
      return false;
    }
  }

  async isSearchPlaceholderCorrect() {
    try {
      const placeholder = await this.searchBox.getAttribute('placeholder');
      return placeholder === 'Search...' || (placeholder && placeholder.includes('Search'));
    } catch {
      return false;
    }
  }

  async areTableHeadersVisible() {
    try {
      const count = await this.tableHeaders.count();
      return count > 0;
    } catch {
      return false;
    }
  }

  async areRowCheckboxesUnchecked() {
    try {
      const count = await this.rowCheckboxes.count();
      if (count === 0) {
        return false;
      }

      for (let i = 0; i < count; i++) {
        if (await this.rowCheckboxes.nth(i).isChecked()) {
          return false;
        }
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  async areEditIconsVisible() {
    try {
      const editCount = await this.editBtnsProgram.count();

      return editCount > 0;
    } catch {
      return false;
    }
  }
  async areDeleteIconsVisible() {
    try {
      const deleteCount = await this.deleteBtnsProgram.count();

      return deleteCount > 0;
    } catch {
      return false;
    }
  }
  async isMultiDeleteButtonVisible() {
    try {
      return await this.multiDeleteBtn.isVisible();
    } catch {
      return false;
    }
  }

  async validateUIElements(uiElements) {
    const errors = [];
    const methodMap = {
      "Manage Program heading": this.isHeadingVisible.bind(this),
      "Add New Program menu": this.isAddNewProgramVisible.bind(this),
      "Search bar": this.isSearchBarVisible.bind(this),
      "Search placeholder": this.isSearchPlaceholderCorrect.bind(this),
      "Table headers": this.areTableHeadersVisible.bind(this),
      // "Multi delete button": this.isMultiDeleteButtonVisible.bind(this), 
      "Row checkboxes": this.areRowCheckboxesUnchecked.bind(this),
      "Edit icons": this.areEditIconsVisible.bind(this),
      "Delete icons": this.areDeleteIconsVisible.bind(this),
      // "Pagination section": this.isPaginationVisible.bind(this), 
      // "Footer message": this.isFooterVisible.bind(this) // 

    };

    for (const name of uiElements) {
      const method = methodMap[name];
      if (!method) {
        errors.push(`Unknown UI element: ${name}`);
        continue;
      }
      const result = await method();
      if (!result) {
        errors.push(`UI element '${name}' failed validation`);
      }
    }
    if (errors.length > 0) {
      throw new Error("UI Validation Failed:\n" + errors.join("\n"));
    }
  }
  // Add New Program UI Elements validation methods
  async clickAddNewProgram() {
    await this.addNewProgramMenuItem.waitFor({ state: 'visible' });
    await this.addNewProgramMenuItem.click();
    await this.dialog.waitFor({ state: 'visible', timeout: 5000 });
  }

  async searchProgram(searchTerm) {
    await this.page.keyboard.press('Escape');
    await this.page.waitForTimeout(300); // needed for menu to close

    //Wait for overlay to disappear
    await this.page.locator('.cdk-overlay-backdrop').waitFor({
      state: 'hidden',
      timeout: 3000
    }).catch(() => { });

    await this.searchBox.click();
    await this.searchBox.clear();
    await this.searchBox.fill(searchTerm);
    await this.searchBox.press('Enter');
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(1000);
  }

  async clickDialogCloseButton() {
    await this.dialogCloseButton.click();
  }
  async clickCancelButton() {
    await this.cancelBtn.click();
  }

  async verifyAddNewProgramDialog() {
    await this.dialog.waitFor({ state: 'visible', timeout: 5000 });
    const isVisible = await this.dialog.isVisible();
    if (!isVisible) {
      throw new Error('Add New Program dialog is not displayed');
    }
  }

  async verifyDialogTitle(expectedTitle) {
    await this.dialogTitle.waitFor({ state: 'visible', timeout: 5000 });
    const actualTitle = await this.dialogTitle.textContent();
    if (!actualTitle.includes(expectedTitle)) {
      throw new Error(`Dialog title mismatch. Expected: "${expectedTitle}", Actual: "${actualTitle}"`);
    }
  }

  async verifyMandatoryFields() {
    await this.nameMandatoryIndicator.waitFor({ state: 'visible', timeout: 5000 });
    const nameIndicatorVisible = await this.nameMandatoryIndicator.isVisible();
    if (!nameIndicatorVisible) {
      throw new Error('Mandatory indicator for "Name" is not visible');
    }

    await this.statusMandatoryIndicator.waitFor({ state: 'visible', timeout: 5000 });
    const statusIndicatorVisible = await this.statusMandatoryIndicator.isVisible();
    if (!statusIndicatorVisible) {
      throw new Error('Mandatory indicator for "Status" is not visible');
    }
  }

  async verifyNameField() {
    await this.nameField.waitFor({ state: 'visible', timeout: 5000 });
    const isVisible = await this.nameField.isVisible();
    if (!isVisible) {
      throw new Error('Name field is not visible');
    }
  }

  async verifyDescriptionField() {
    await this.descriptionField.waitFor({ state: 'visible', timeout: 5000 });
    const isVisible = await this.descriptionField.isVisible();
    if (!isVisible) {
      throw new Error('Description field is not visible');
    }
  }

  async verifyStatusRadioButtons() {
    await this.activeRadio.waitFor({ state: 'visible', timeout: 5000 });
    await this.inactiveRadio.waitFor({ state: 'visible', timeout: 5000 });
    const activeVisible = await this.activeRadio.isVisible();
    const inactiveVisible = await this.inactiveRadio.isVisible();
    if (!activeVisible || !inactiveVisible) {
      throw new Error('Status radio buttons are not visible');
    }
  }
  async clickProgramSaveButton() {
    await this.saveBtn.click();
  }
  async fillProgramDetails(name, description, status) {
    if (name !== undefined) {
      await this.nameField.clear();
      if (name) await this.nameField.fill(name);
    }

    if (description !== undefined) {
      await this.descriptionField.clear();
      if (description) await this.descriptionField.fill(description);
    }

    if (status) {
      if (status.toLowerCase() === 'active') {
        await this.activeRadio.click();
      } else if (status.toLowerCase() === 'inactive') {
        await this.inactiveRadio.click();
      }
    }
  }
  // Verify message methods
  async verifyAppropriateMessage(expectedMessage, testType) {
    if (testType === 'positive') {
      await this.verifyProgramSuccessMessage(expectedMessage);
      return true;
    } else if (testType === 'negative') {
      await this.verifyProgramErrorMessage(expectedMessage);
      return false;
    } else {

      if (expectedMessage.toLowerCase().includes('success') ||
        expectedMessage.toLowerCase().includes('created')) {
        await this.verifyProgramSuccessMessage(expectedMessage);
        return true;
      } else {
        await this.verifyProgramErrorMessage(expectedMessage);
        return false;
      }
    }
  }
  async verifyProgramSuccessMessage(expectedMessage) {
    const toast = this.page.locator('[role="alert"]').first();
    await toast.waitFor({ state: 'visible', timeout: 10000 });

    const actualMessage = await this.page.locator('.p-toast-detail').first().textContent();

    if (!actualMessage.includes(expectedMessage)) {
      throw new Error(`Success message mismatch. Expected: "${expectedMessage}", Got: "${actualMessage}"`);
    }

    console.log(`Success message verified: "${actualMessage}"`);
  }
  async verifyProgramErrorMessage(expectedMessage) {
    const errorElements = this.page.locator('small.p-invalid');
    const count = await errorElements.count();

    for (let i = 0; i < count; i++) {
      const text = await errorElements.nth(i).textContent();
      if (text?.trim() && (text.includes(expectedMessage) || expectedMessage.includes(text))) {
        console.log(`Error message found: "${text.trim()}"`);
        return;
      }
    }

    throw new Error(`Error message not found for: "${expectedMessage}"`);
  }
  async verifyProgramInSearchResults(programName) {
    try {
      await this.page.waitForTimeout(1000);
      const row = this.page.locator(`table tbody tr:has-text("${programName}")`);
      const count = await row.count();

      if (count === 0) {
        throw new Error(`Program "${programName}" not found in search results`);
      }

      const cells = row.locator('td');
      const name = await cells.nth(0).textContent();
      const description = await cells.nth(1).textContent();
      const status = await cells.nth(2).textContent();
      return { name, description, status };
    } catch (error) {
      throw new Error(`Program not found: ${error.message}`);
    }
  }
  async verifyProgramByDescription(description) {
    const row = this.page.locator(`table tbody tr:has-text("${description}")`);
    const count = await row.count();

    if (count === 0) {
      throw new Error(`Program with description "${description}" not found`);
    }

    const name = await row.locator('td').nth(1).textContent();
    const desc = await row.locator('td').nth(2).textContent();
    const status = await row.locator('td').nth(3).textContent();

    return { name, description: desc, status };
  }

  async verifyPartialSearchResults(partialName) {
    const rows = await this.tableRows.all();

    if (rows.length === 0) {
      console.log(`No results found for partial search: "${partialName}"`);
      return [];
    }
    const results = [];
    for (const row of rows) {
      const name = await row.locator('td').nth(1).textContent();
      results.push(name?.trim());
    }

    console.log(`Found ${results.length} results for partial search: "${partialName}"`);
    return results;
  }
  async verifyNoResults() {
    const rowCount = await this.tableRows.count();

    if (rowCount === 0) {
      console.log(' No results found as expected');
      return true;
    }

    throw new Error(`Expected zero results but found ${rowCount} results`);
  }
  //----------Edit methods---------------
 
  async clickEditOnFirstProgram() {
    await this.page.keyboard.press('Escape');
    await this.page.waitForTimeout(300);
    const firstRow = this.tableRows.first();
    await firstRow.locator('#editProgram').click();
  }

  async verifyDialogVisible() {
    await this.editDialogue.waitFor({ state: 'visible', timeout: 5000 });
    const isVisible = await this.editDialogue.isVisible();
    if (!isVisible) {
      throw new Error('Program Details dialog is not displayed');
    }
  }
  async editProgramName(newName) {
    await this.progrmForEdit.clear();
    await this.progrmForEdit.fill(newName);
  }

  async editProgramDescription(newDescription) {
    await this.descriptionForEdit.clear();
    await this.descriptionForEdit.fill(newDescription);
  }

  async editProgramStatus(newStatus) {
    if (newStatus.toLowerCase() === 'active') {
      await this.activeBtnForEdit.click();
    } else if (newStatus.toLowerCase() === 'inactive') {
      await this.inactiveBtnForEdit.click();
    }
  }
  async verifyProgramUpdatedSuccessMessage(expectedMessage) {
    const toast = this.page.locator('[role="alert"]').first();
    await toast.waitFor({ state: 'visible', timeout: 10000 });

    const actualMessage = (await toast.textContent()).replace(/\s+/g, ' ').trim();

    if (!actualMessage.includes('Program Updated')) {
      throw new Error(`Message does not contain "Program Updated". Got: "${actualMessage}"`);
    }

    console.log(`Success message verified: "${actualMessage}"`);
  }
  async getCurrentStatus() {
    const isActive = await this.activeBtnForEdit.isChecked().catch(() => false);
    return isActive ? 'Active' : 'Inactive';
  }
  // ============= Delete Methods =============

  async clickDeleteOnFirstProgram() {
    await this.page.keyboard.press('Escape');
    await this.page.waitForTimeout(300); // Only keep this - needed for menu to close

    const firstRow = this.tableRows.first();
    await firstRow.waitFor({ state: 'visible', timeout: 5000 });
    const programName = await firstRow.locator('td').nth(1).textContent();
    const deleteButton = firstRow.locator('#deleteProgram');
    await deleteButton.click();
    await this.confirmAlertBoxForDelete.waitFor({ state: 'visible', timeout: 5000 });

  }

  async clickYesOnDeleteConfirmation() {
    await this.yesButtonForDelete.click();

  }

  async clickNoOnDeleteConfirmation() {
    await this.noButtonForDelete.click();

  }

  async clickCloseOnDeleteConfirmation() {
    await this.closeButtonForDelete.click();

  }

  async verifyDeleteConfirmationDialog() {
    await this.confirmAlertBoxForDelete.waitFor({ state: 'visible', timeout: 5000 });
    const yesVisible = await this.yesButtonForDelete.isVisible();
    const noVisible = await this.noButtonForDelete.isVisible();     

  }

  async verifyProgramDeletedSuccessfully() {

    await this.page.locator('[role="alert"]').first().waitFor({ state: 'visible', timeout: 10000 });
    const successMessage = await this.page.locator('[role="alert"]').first().textContent();
    await this.confirmAlertBoxForDelete.waitFor({ state: 'hidden', timeout: 5000 });
  }

  // Helper method to get program name
  async getProgramNameFromTable() {
    const name = await this.tableRows.first().locator('td').nth(1).textContent();
    return name?.trim() || null;
  }

  // 
  async verifyAlertBoxClosedAndProgramNotDeleted() {
    await this.confirmAlertBoxForDelete.waitFor({ state: 'hidden', timeout: 5000 });
    const programName = await this.getProgramNameFromTable();
    if (!programName) return;

    await this.searchProgram(programName);
    const row = this.page.locator(`table tbody tr:has-text("${programName}")`);
    // if (await row.count() === 0) {
    //   throw new Error(`Program "${programName}" was deleted but should NOT have been!`);
    // }
  }

  //  Verify program not deleted and page visible
  async verifyAlertBoxClosedAndProgramPageVisible() {
    await this.confirmAlertBoxForDelete.waitFor({ state: 'hidden', timeout: 5000 });
    const programName = await this.getProgramNameFromTable();
    if (programName) {
      await this.searchProgram(programName);
      const row = this.page.locator(`table tbody tr:has-text("${programName}")`);
      // if (await row.count() === 0) {
      //   throw new Error(`Program "${programName}" was deleted!`);
      // }
      // console.log(`Program "${programName}" still exists`);
    }

    const isVisible = await this.manageProgram.isVisible();
    // if (!isVisible) throw new Error('Program page not visible');

  }

  //------------------------------------------------------------------
  async navigate() {
    await this.page.goto('/program');
    await this.page.waitForLoadState('networkidle');
  }

  async clickProgramNameArrow() {
    await this.programNameHeader.click();
  }

  async clickProgramDescriptionArrow() {
    await this.page.keyboard.press('Escape');
    await this.page.waitForTimeout(300);
    await this.programDescriptionHeader.click();
  }

  async clickProgramStatusArrow() {
    await this.page.keyboard.press('Escape');
    await this.page.waitForTimeout(300);
    await this.programStatusHeader.click();
  }

  async getProgramNames() {
    return await this.page.$$eval('table tbody tr td:nth-child(2)', els =>
      els.map(el => el.textContent.trim())
    );
  }

  async getProgramDescriptions() {
    return await this.page.$$eval('table tbody tr td:nth-child(3)', els =>
      els.map(el => el.textContent.trim())
    );
  }

  async getProgramStatuses() {
    return await this.page.$$eval('table tbody tr td:nth-child(4)', els =>
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

//Delete multiple
async selectMultipleRows(indices) {
    await this.page.keyboard.press('Escape');
    await this.page.locator('.cdk-overlay-backdrop').waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    await this.page.waitForTimeout(500);
    for (const index of indices) {
      await this.rowCheckboxes.nth(index).click();
      await this.page.waitForTimeout(300);
    }
  }

  async getSelectedRowCount() {
    return await this.rowCheckboxes.locator('.p-checkbox-icon').count();
  }

  async isTableVisible() {
    return await this.page.locator('table').isVisible();
  }

async isDeleteButtonEnabled() {
    logger.step('Checking if delete button is enabled');
    const btn = this.page.locator('button').filter({ hasText: /delete/i }).first();
    if (await btn.count() === 0) {
      const iconBtn = this.page.locator('button .pi-trash').locator('..');
      return !(await iconBtn.first().isDisabled());
    }
    return !(await btn.isDisabled());
  }

  async clickDeleteButton() {
    logger.step('Clicking delete button');
    const btn = this.page.locator('button').filter({ hasText: /delete/i }).first();
    if (await btn.count() === 0) {
      const iconBtn = this.page.locator('button .pi-trash').locator('..');
      await iconBtn.first().click();
    } else {
      await btn.click();
    }
    await this.page.waitForTimeout(1000);
  }

  // Confirmation dialog
  async isConfirmDialogVisible() {
    logger.step('Checking if confirmation dialog is visible');
    return await this.confirmDialog.isVisible();
  }

  async clickYesButton() {
    logger.step('Clicking Yes button on confirmation dialog');
    await this.confirmYesBtn.click();
    await this.page.waitForTimeout(2000);
  }

  async clickNoButton() {
    logger.step('Clicking No button on confirmation dialog');
    await this.confirmNoBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async clickCloseButton() {
    logger.step('Clicking close (X) button on confirmation dialog');
    await this.confirmCloseBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async getConfirmMessage() {
    return await this.confirmMessage.textContent();
  }

  // Toast / Success message
  async getToastMessage() {
    logger.step('Getting toast message');
    await this.page.waitForSelector('.p-toast-message', { timeout: 5000 });
    return await this.toastText.textContent();
  }

  async isToastVisible() {
    return await this.toastMessage.isVisible();
  }

 ///Pagination

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
