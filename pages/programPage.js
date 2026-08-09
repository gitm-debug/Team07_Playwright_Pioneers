import {expect} from '@playwright/test';
export class ProgramPage{
    constructor(page){
        this.page = page;
        this.programMenuBar= page.getByRole('button', { name: 'Program' });
        this.addNewProgramMenuItem = page.getByRole('menuitem', { name: 'Add New Program' });
        this.manageProgram = page.getByText('Manage Program');
        this.searchBox = page.getByRole('textbox', { name: 'Search...' });
        this.tableHeaders = page.locator('table thead th');
        this.rowCheckboxes = page.locator('table tbody input[type="checkbox"]');
        this.editBtnsProgram = page.locator('#editProgram');
        this.deleteBtnsProgram = page.locator('#deleteProgram');
        this.multiDeleteBtn = page.locator("div[class='p-checkbox-box']")
        this.footerMsg = page.locator(".p-d-flex.p-ai-center.p-jc-between.ng-star-inserted")
        this.paginationMsg= page.locator(".p-paginator-current.ng-star-inserted")
        
        // Add New Program Dialog locators
        this.dialog = page.locator('.MuiDialog-root, .modal, [role="dialog"]');
        this.dialogTitle = page.locator('span.p-dialog-title.ng-tns-c81-8.ng-star-inserted');
        
        // Form fields
        //await page.locator("//label[@for='programName']")
        this.nameText= page.getByLabel('Name*')
        this.nameField = page.locator('#programName');
        this.descriptionText = page.getByLabel('Description');
        this.descriptionField= page.getByRole('textbox', { name: 'Description' })
        // Status radio buttons
        this.activeRadio = page.locator('div.p-radiobutton:has(input#Active) .p-radiobutton-box');
        this.inactiveRadio = page.locator('div.p-radiobutton:has(input#Inactive) .p-radiobutton-box');
        // Mandatory field indicators
        this.nameMandatoryIndicator = page.locator("//label[@for='programName']//span[contains(text(),'*')]");
        this.statusMandatoryIndicator = page.locator("//lable[@for='online']//span[contains(text(),'*')]");
        //Add Program save and cancel buttons
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        this.cancelBtn = page.getByRole('button', { name: 'Cancel' });
        // Error messages 
        this.errorMessage = page.locator('small.p-invalid'); // <small class="p-invalid">
        this.fieldError = page.locator('small.p-invalid'); // Same selector
      }
      async navigateToProgramPage(){
        await this.programMenuBar.click();
    }
    // 1. Manage Program heading
  async isHeadingVisible() {
    try {
      return await this.manageProgram.isVisible();
    } catch {
      return false;
    }
  }
  // 2. Add New Program menu
  async isAddNewProgramVisible() {
    try {
      return await this.addNewProgramMenuItem.isVisible();
    } catch {
      return false;
    }
  }

  // 3. Search bar
  async isSearchBarVisible() {
    try {
      return await this.searchBox.isVisible();
    } catch {
      return false;
    }
  }

  // 4. Search placeholder
  async isSearchPlaceholderCorrect() {
    try {
      const placeholder = await this.searchBox.getAttribute('placeholder');
      console.log('Placeholder found:', placeholder);
      return placeholder === 'Search...' || (placeholder && placeholder.includes('Search'));
    } catch {
      return false;
    }
  }

  // 5. Table headers
  async areTableHeadersVisible() {
    try {
      const count = await this.tableHeaders.count();
      console.log('Table headers count:', count);
      return count > 0;
    } catch {
      return false;
    }
  }

  // 6. Row checkboxes - FIXED
  async areRowCheckboxesUnchecked() {
    try {
      const count = await this.rowCheckboxes.count();
      console.log('Checkboxes count:', count);
      
      if (count === 0) {
        console.log('No checkboxes found');
        return false;
      }
      
      for (let i = 0; i < count; i++) {
        if (await this.rowCheckboxes.nth(i).isChecked()) {
          console.log(`Checkbox ${i} is checked`);
          return false;
        }
      }
      console.log('All checkboxes are unchecked');
      return true;
    } catch (error) {
      console.error('Error checking checkboxes:', error);
      return false;
    }
  }

  // 7. Edit/Delete icons 
  async areEditIconsVisible() {
    try {
      const editCount = await this.editBtnsProgram.count();
      console.log('Edit buttons count:', editCount);
      return editCount > 0;
    } catch {
      return false;
    }
  }
  async areDeleteIconsVisible() {
    try {
      const deleteCount = await this.deleteBtnsProgram.count();
      console.log('Delete buttons count:', deleteCount);
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

  // Main validation method
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
    
    console.log('All UI elements validated successfully!');
  }
  // Add New Program UI Elements validation methods
  async clickAddNewProgram() {
    await this.addNewProgramMenuItem.waitFor({ state: 'visible' });
    await this.addNewProgramMenuItem.click();
    await this.dialog.waitFor({ state: 'visible', timeout: 5000 });
  }
  // ============= Individual Verification Methods for Add New Program UI Dialog =============

  

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
    // Verify Name field mandatory indicator
    await this.nameMandatoryIndicator.waitFor({ state: 'visible', timeout: 5000 });
    const nameIndicatorVisible = await this.nameMandatoryIndicator.isVisible();
    if (!nameIndicatorVisible) {
      throw new Error('Mandatory indicator for "Name" is not visible');
    }

    // Verify Status field mandatory indicator
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
  //----------- Add New Program functional validation methods -----------
  async clickProgramSaveButton() {
    await this.saveBtn.click();  
    console.log('Save button clicked');
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
    // Auto-detect fallback
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
    console.log('Toast container found');
    
    //  Get the detail message
    const detailMessage = this.page.locator('.p-toast-detail');
    await detailMessage.first().waitFor({ state: 'visible', timeout: 5000 });
    const actualMessage = await detailMessage.first().textContent();
    
    console.log(`Success message found: "${actualMessage}"`);
    
    // Verify the message
    if (!actualMessage.includes(expectedMessage)) {
      throw new Error(`Success message mismatch. Expected: "${expectedMessage}", Got: "${actualMessage}"`);
    }
    
    console.log(`Success message verified: "${actualMessage}"`);
    
    // Also get the summary if needed
    const summary = this.page.locator('.p-toast-summary');
    const summaryText = await summary.first().textContent();
    console.log(`Toast summary: "${summaryText}"`);
    
  } catch (error) {
    // Fallback: Try getByText
    try {
      const message = this.page.getByText('Program Created Successfully');
      await message.waitFor({ state: 'visible', timeout: 5000 });
      const text = await message.textContent();
      console.log(`Found via getByText: "${text}"`);
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
    
    // Get ALL small.p-invalid elements
    const errorElements = this.page.locator('small.p-invalid');
    const count = await errorElements.count();
    
    console.log(`Found ${count} error elements`);
    
    let found = false;
    
    for (let i = 0; i < count; i++) {
      const text = await errorElements.nth(i).textContent();
      const trimmedText = text?.trim();
      
      console.log(`Error ${i}: "${trimmedText}"`);
      
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
    }
