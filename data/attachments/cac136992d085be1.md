# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/03_program.feature.spec.js >> Program Page Verification >> Edit program field >> Example #1
- Location: .features-gen/features/03_program.feature.spec.js:188:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('table tbody tr').first().locator('#editProgram')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - generic [ref=e5]: LMS - Learning Management System
    - generic [ref=e6]:
      - button "Home" [ref=e7] [cursor=pointer]
      - button "Program" [active] [ref=e8] [cursor=pointer]
      - button "Batch" [ref=e9] [cursor=pointer]
      - button "Logout" [ref=e10] [cursor=pointer]
  - generic [ref=e13]:
    - generic [ref=e14]:
      - generic [ref=e15]: Manage Program
      - generic [ref=e16]:
        - button [disabled] [ref=e18]:
          - generic [ref=e19]: 
        - generic [ref=e21]:
          - generic [ref=e22]: 
          - textbox "Search..." [ref=e23]
    - generic [ref=e26]:
      - grid [ref=e28]:
        - rowgroup [ref=e29]:
          - row [ref=e30]:
            - columnheader [ref=e31]:
              - generic [ref=e33] [cursor=pointer]:
                - generic [ref=e34]:
                  - checkbox [disabled]
                - checkbox
            - columnheader "Program Name " [ref=e35] [cursor=pointer]:
              - text: Program Name
              - generic [ref=e36]: 
            - columnheader "Program Description " [ref=e38] [cursor=pointer]:
              - text: Program Description
              - generic [ref=e39]: 
            - columnheader "Program Status " [ref=e41] [cursor=pointer]:
              - text: Program Status
              - generic [ref=e42]: 
            - columnheader "Edit / Delete" [ref=e44]
        - rowgroup
      - generic [ref=e46]:
        - generic [ref=e47] [cursor=pointer]: Showing 0 to 0 of 0 entries
        - button "" [disabled]
        - button "" [disabled]
        - button "1" [ref=e49] [cursor=pointer]
        - button "" [disabled]
        - button "" [disabled]
      - generic [ref=e50]: In total there are 0 programs.
```

# Test source

```ts
  330 |         await this.verifyProgramSuccessMessage(expectedMessage);
  331 |         return true;
  332 |       } else {
  333 |         await this.verifyProgramErrorMessage(expectedMessage);
  334 |         return false;
  335 |       }
  336 |     }
  337 |   }
  338 |   async verifyProgramSuccessMessage(expectedMessage) {
  339 |     const toast = this.page.locator('[role="alert"]').first();
  340 |     await toast.waitFor({ state: 'visible', timeout: 10000 });
  341 | 
  342 |     const actualMessage = await this.page.locator('.p-toast-detail').first().textContent();
  343 | 
  344 |     if (!actualMessage.includes(expectedMessage)) {
  345 |       throw new Error(`Success message mismatch. Expected: "${expectedMessage}", Got: "${actualMessage}"`);
  346 |     }
  347 | 
  348 |     console.log(`Success message verified: "${actualMessage}"`);
  349 |   }
  350 |   async verifyProgramErrorMessage(expectedMessage) {
  351 |     const errorElements = this.page.locator('small.p-invalid');
  352 |     const count = await errorElements.count();
  353 | 
  354 |     for (let i = 0; i < count; i++) {
  355 |       const text = await errorElements.nth(i).textContent();
  356 |       if (text?.trim() && (text.includes(expectedMessage) || expectedMessage.includes(text))) {
  357 |         console.log(`Error message found: "${text.trim()}"`);
  358 |         return;
  359 |       }
  360 |     }
  361 | 
  362 |     throw new Error(`Error message not found for: "${expectedMessage}"`);
  363 |   }
  364 |   async verifyProgramInSearchResults(programName) {
  365 |     try {
  366 |       await this.page.waitForTimeout(1000);
  367 |       const row = this.page.locator(`table tbody tr:has-text("${programName}")`);
  368 |       const count = await row.count();
  369 | 
  370 |       if (count === 0) {
  371 |         throw new Error(`Program "${programName}" not found in search results`);
  372 |       }
  373 | 
  374 |       const cells = row.locator('td');
  375 |       const name = await cells.nth(0).textContent();
  376 |       const description = await cells.nth(1).textContent();
  377 |       const status = await cells.nth(2).textContent();
  378 |       return { name, description, status };
  379 |     } catch (error) {
  380 |       throw new Error(`Program not found: ${error.message}`);
  381 |     }
  382 |   }
  383 |   async verifyProgramByDescription(description) {
  384 |     const row = this.page.locator(`table tbody tr:has-text("${description}")`);
  385 |     const count = await row.count();
  386 | 
  387 |     if (count === 0) {
  388 |       throw new Error(`Program with description "${description}" not found`);
  389 |     }
  390 | 
  391 |     const name = await row.locator('td').nth(1).textContent();
  392 |     const desc = await row.locator('td').nth(2).textContent();
  393 |     const status = await row.locator('td').nth(3).textContent();
  394 | 
  395 |     return { name, description: desc, status };
  396 |   }
  397 | 
  398 |   async verifyPartialSearchResults(partialName) {
  399 |     const rows = await this.tableRows.all();
  400 | 
  401 |     if (rows.length === 0) {
  402 |       console.log(`No results found for partial search: "${partialName}"`);
  403 |       return [];
  404 |     }
  405 |     const results = [];
  406 |     for (const row of rows) {
  407 |       const name = await row.locator('td').nth(1).textContent();
  408 |       results.push(name?.trim());
  409 |     }
  410 | 
  411 |     console.log(`Found ${results.length} results for partial search: "${partialName}"`);
  412 |     return results;
  413 |   }
  414 |   async verifyNoResults() {
  415 |     const rowCount = await this.tableRows.count();
  416 | 
  417 |     if (rowCount === 0) {
  418 |       console.log(' No results found as expected');
  419 |       return true;
  420 |     }
  421 | 
  422 |     throw new Error(`Expected zero results but found ${rowCount} results`);
  423 |   }
  424 |   //----------Edit methods---------------
  425 |  
  426 |   async clickEditOnFirstProgram() {
  427 |     await this.page.keyboard.press('Escape');
  428 |     await this.page.waitForTimeout(300);
  429 |     const firstRow = this.tableRows.first();
> 430 |     await firstRow.locator('#editProgram').click();
      |                                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  431 |   }
  432 | 
  433 |   async verifyDialogVisible() {
  434 |     await this.editDialogue.waitFor({ state: 'visible', timeout: 5000 });
  435 |     const isVisible = await this.editDialogue.isVisible();
  436 |     if (!isVisible) {
  437 |       throw new Error('Program Details dialog is not displayed');
  438 |     }
  439 |   }
  440 |   async editProgramName(newName) {
  441 |     await this.progrmForEdit.clear();
  442 |     await this.progrmForEdit.fill(newName);
  443 |   }
  444 | 
  445 |   async editProgramDescription(newDescription) {
  446 |     await this.descriptionForEdit.clear();
  447 |     await this.descriptionForEdit.fill(newDescription);
  448 |   }
  449 | 
  450 |   async editProgramStatus(newStatus) {
  451 |     if (newStatus.toLowerCase() === 'active') {
  452 |       await this.activeBtnForEdit.click();
  453 |     } else if (newStatus.toLowerCase() === 'inactive') {
  454 |       await this.inactiveBtnForEdit.click();
  455 |     }
  456 |   }
  457 |   async verifyProgramUpdatedSuccessMessage(expectedMessage) {
  458 |     const toast = this.page.locator('[role="alert"]').first();
  459 |     await toast.waitFor({ state: 'visible', timeout: 10000 });
  460 | 
  461 |     const actualMessage = (await toast.textContent()).replace(/\s+/g, ' ').trim();
  462 | 
  463 |     if (!actualMessage.includes('Program Updated')) {
  464 |       throw new Error(`Message does not contain "Program Updated". Got: "${actualMessage}"`);
  465 |     }
  466 | 
  467 |     console.log(`Success message verified: "${actualMessage}"`);
  468 |   }
  469 |   async getCurrentStatus() {
  470 |     const isActive = await this.activeBtnForEdit.isChecked().catch(() => false);
  471 |     return isActive ? 'Active' : 'Inactive';
  472 |   }
  473 |   // ============= Delete Methods =============
  474 | 
  475 |   async clickDeleteOnFirstProgram() {
  476 |     await this.page.keyboard.press('Escape');
  477 |     await this.page.waitForTimeout(300); // Only keep this - needed for menu to close
  478 | 
  479 |     const firstRow = this.tableRows.first();
  480 |     await firstRow.waitFor({ state: 'visible', timeout: 5000 });
  481 |     const programName = await firstRow.locator('td').nth(1).textContent();
  482 |     const deleteButton = firstRow.locator('#deleteProgram');
  483 |     await deleteButton.click();
  484 |     await this.confirmAlertBoxForDelete.waitFor({ state: 'visible', timeout: 5000 });
  485 | 
  486 |   }
  487 | 
  488 |   async clickYesOnDeleteConfirmation() {
  489 |     await this.yesButtonForDelete.click();
  490 | 
  491 |   }
  492 | 
  493 |   async clickNoOnDeleteConfirmation() {
  494 |     await this.noButtonForDelete.click();
  495 | 
  496 |   }
  497 | 
  498 |   async clickCloseOnDeleteConfirmation() {
  499 |     await this.closeButtonForDelete.click();
  500 | 
  501 |   }
  502 | 
  503 |   async verifyDeleteConfirmationDialog() {
  504 |     await this.confirmAlertBoxForDelete.waitFor({ state: 'visible', timeout: 5000 });
  505 |     const yesVisible = await this.yesButtonForDelete.isVisible();
  506 |     const noVisible = await this.noButtonForDelete.isVisible();     
  507 | 
  508 |   }
  509 | 
  510 |   async verifyProgramDeletedSuccessfully() {
  511 | 
  512 |     await this.page.locator('[role="alert"]').first().waitFor({ state: 'visible', timeout: 10000 });
  513 |     const successMessage = await this.page.locator('[role="alert"]').first().textContent();
  514 |     await this.confirmAlertBoxForDelete.waitFor({ state: 'hidden', timeout: 5000 });
  515 |   }
  516 | 
  517 |   // Helper method to get program name
  518 |   async getProgramNameFromTable() {
  519 |     const name = await this.tableRows.first().locator('td').nth(1).textContent();
  520 |     return name?.trim() || null;
  521 |   }
  522 | 
  523 |   // 
  524 |   async verifyAlertBoxClosedAndProgramNotDeleted() {
  525 |     await this.confirmAlertBoxForDelete.waitFor({ state: 'hidden', timeout: 5000 });
  526 |     const programName = await this.getProgramNameFromTable();
  527 |     if (!programName) return;
  528 | 
  529 |     await this.searchProgram(programName);
  530 |     const row = this.page.locator(`table tbody tr:has-text("${programName}")`);
```