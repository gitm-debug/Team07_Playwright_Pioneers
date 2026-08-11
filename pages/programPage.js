import { expect } from '@playwright/test';
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
    // Error messages 
    this.errorMessage = page.locator('small.p-invalid'); // <small class="p-invalid">   
    this.tableRows = page.locator('table tbody tr');
    //-----------
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
      console.log('Placeholder found:', placeholder);
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
        console.log('No checkboxes found');
        return false;
      }

      for (let i = 0; i < count; i++) {
        if (await this.rowCheckboxes.nth(i).isChecked()) {
          return false;
        }
      }

      return true;
    } catch (error) {
      console.error('Error checking checkboxes:', error);
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
    try {
      await this.page.keyboard.press('Escape');
      await this.page.waitForTimeout(500);
      await this.page.locator('.cdk-overlay-backdrop').waitFor({ state: 'hidden', timeout: 5000 }).catch(() => { });
      await this.searchBox.click();
      await this.page.waitForTimeout(200);
      await this.searchBox.clear();
      await this.searchBox.fill(searchTerm);
      await this.searchBox.press('Enter');
      await this.page.waitForTimeout(1000);

    } catch (error) {
      console.error(`Failed to search: ${error.message}`);
      throw error;
    }
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
    try {
      // Wait for the toast to appear using role="alert"
      await this.page.locator('[role="alert"]').first().waitFor({
        state: 'visible',
        timeout: 10000
      });

      const detailMessage = this.page.locator('.p-toast-detail');
      await detailMessage.first().waitFor({ state: 'visible', timeout: 5000 });
      const actualMessage = await detailMessage.first().textContent();
      if (!actualMessage.includes(expectedMessage)) {
        throw new Error(`Success message mismatch. Expected: "${expectedMessage}", Got: "${actualMessage}"`);
      }
      const summary = this.page.locator('.p-toast-summary');
      const summaryText = await summary.first().textContent();

    } catch (error) {

      try {
        const message = this.page.getByText('Program Created Successfully');
        await message.waitFor({ state: 'visible', timeout: 5000 });
        const text = await message.textContent();
        return;
      } catch (e) {
        // Ignore
      }
      throw new Error(`Success message not found: ${error.message}`);
    }
  }
  async verifyProgramErrorMessage(expectedMessage) {
    try {
      await this.page.waitForTimeout(1000);
      const errorElements = this.page.locator('small.p-invalid');
      const count = await errorElements.count();
      let found = false;
      for (let i = 0; i < count; i++) {
        const text = await errorElements.nth(i).textContent();
        const trimmedText = text?.trim();
        if (trimmedText && trimmedText.length > 0) {
          if (trimmedText.includes(expectedMessage) || expectedMessage.includes(trimmedText)) {
            found = true;
            break;
          }
        }
      }

      if (!found) {
        throw new Error(`Error message not found for: "${expectedMessage}"`);
      }

    } catch (error) {
      throw new Error(`Error message verification failed: ${error.message}`);
    }
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
    try {
      await this.page.waitForTimeout(1000);
      const row = this.page.locator(`table tbody tr:has-text("${description}")`);
      const count = await row.count();
      if (count === 0) {
        throw new Error(`Program with description "${description}" not found`);
      }
      const cells = row.locator('td');
      const name = await cells.nth(0).textContent();
      const desc = await cells.nth(1).textContent();
      const status = await cells.nth(2).textContent();
      return { name, description: desc, status };
    } catch (error) {
      throw new Error(`Description not found: ${error.message}`);
    }
  }

  async verifyPartialSearchResults(partialName) {
    try {
      await this.page.waitForTimeout(1000);
      if (!this.tableRows) {
        throw new Error('tableRows locator is not defined');
      }
      const rows = await this.tableRows.all();
      const rowCount = rows.length;
      if (rowCount === 0) {
        console.log(`No results found for partial search: "${partialName}"`);
        return [];
      }
      const results = [];
      for (let i = 0; i < rowCount; i++) {
        const cells = rows[i].locator('td');
        const name = await cells.nth(0).textContent();
        results.push(name?.trim());
      }
      return results;
    } catch (error) {
      throw new Error(`Partial search failed: ${error.message}`);
    }
  }
  async verifyNoResults() {
    try {
      await this.page.waitForTimeout(1000);
      const rowCount = await this.tableRows.count();
      const noResultsVisible = await this.page.getByText('Showing 0 to 0 of 0 entries').isVisible().catch(() => false);
      if (rowCount === 0 || noResultsVisible) {
        console.log(' No results found as expected');
        return true;
      }
      throw new Error('Expected zero results but found results');
    } catch (error) {
      throw new Error(`No results verification failed: ${error.message}`);
    }
  }
  //----------Edit methods---------------


  //  Click edit on the first program in the table
  async clickEditOnFirstProgram() {
    await this.page.keyboard.press('Escape');
    await this.page.waitForTimeout(300);

    const firstRow = this.tableRows.first();
    await firstRow.locator('#editProgram').click();

    console.log(' Edit dialog opened');
  }

  async verifyDialogVisible() {
    await this.editDialogue.waitFor({ state: 'visible', timeout: 5000 });
    const isVisible = await this.editDialogue.isVisible();
    if (!isVisible) {
      throw new Error('Program Details dialog is not displayed');
    }
    console.log('Program Details dialog is displayed');
  }
  async editProgramName(newName) {
    await this.progrmForEdit.clear();
    await this.progrmForEdit.fill(newName);
    console.log(`Program name updated to: "${newName}"`);
  }

  async editProgramDescription(newDescription) {
    await this.descriptionForEdit.clear();
    await this.descriptionForEdit.fill(newDescription);
    console.log(` Program description updated to: "${newDescription}"`);
  }

  async editProgramStatus(newStatus) {
    if (newStatus.toLowerCase() === 'active') {
      await this.activeBtnForEdit.click();
    } else if (newStatus.toLowerCase() === 'inactive') {
      await this.inactiveBtnForEdit.click();
    }
    console.log(`Status updated to: ${newStatus}`);
  }
  async verifyProgramUpdatedSuccessMessage(expectedMessage) {
    const toast = this.page.locator('[role="alert"]').first();
    await toast.waitFor({ state: 'visible', timeout: 10000 });

    const actualMessage = (await toast.textContent()).replace(/\s+/g, ' ').trim();
    console.log(`Actual message: "${actualMessage}"`);

    if (!actualMessage.includes('Program Updated')) {
      throw new Error(`Message does not contain "Program Updated". Got: "${actualMessage}"`);
    }

    console.log(`Success message verified: "${actualMessage}"`);
  }
  async getCurrentStatus() {
    const isActive = await this.activeBtnForEdit.isChecked().catch(() => false);
    return isActive ? 'Active' : 'Inactive';
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
}
