# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/03_program.feature.spec.js >> Program Page Verification >> Verify edited Program details
- Location: .features-gen/features/03_program.feature.spec.js:190:3

# Error details

```
Error: Program not found: Program "Updatedxrvazm" not found in search results
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - generic [ref=e5]: LMS - Learning Management System
    - generic [ref=e6]:
      - button "Home" [ref=e7] [cursor=pointer]
      - button "Program" [ref=e8] [cursor=pointer]
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
          - textbox "Search..." [active] [ref=e23]: Updatedxrvazm
    - generic [ref=e26]:
      - grid [ref=e28]:
        - rowgroup [ref=e29]:
          - row [ref=e30]:
            - columnheader [ref=e31]:
              - generic [ref=e33] [cursor=pointer]:
                - generic [ref=e34]:
                  - checkbox
                - checkbox [ref=e35]
            - columnheader "Program Name " [ref=e36] [cursor=pointer]:
              - text: Program Name
              - generic [ref=e37]: 
            - columnheader "Program Description " [ref=e39] [cursor=pointer]:
              - text: Program Description
              - generic [ref=e40]: 
            - columnheader "Program Status " [ref=e42] [cursor=pointer]:
              - text: Program Status
              - generic [ref=e43]: 
            - columnheader "Edit / Delete" [ref=e45]
        - rowgroup
      - generic [ref=e47]:
        - generic [ref=e48] [cursor=pointer]: Showing 0 to 0 of 0 entries
        - button "" [disabled]
        - button "" [disabled]
        - button "1" [ref=e50] [cursor=pointer]
        - button "" [disabled]
        - button "" [disabled]
      - generic [ref=e51]: In total there are 100 programs.
```

# Test source

```ts
  273 | 
  274 |     if (status) {
  275 |       if (status.toLowerCase() === 'active') {
  276 |         await this.activeRadio.click();
  277 |       } else if (status.toLowerCase() === 'inactive') {
  278 |         await this.inactiveRadio.click();
  279 |       }
  280 |     }
  281 |   }
  282 |   // Verify message methods
  283 |   async verifyAppropriateMessage(expectedMessage, testType) {
  284 |     if (testType === 'positive') {
  285 |       await this.verifyProgramSuccessMessage(expectedMessage);
  286 |       return true;
  287 |     } else if (testType === 'negative') {
  288 |       await this.verifyProgramErrorMessage(expectedMessage);
  289 |       return false;
  290 |     } else {
  291 | 
  292 |       if (expectedMessage.toLowerCase().includes('success') ||
  293 |         expectedMessage.toLowerCase().includes('created')) {
  294 |         await this.verifyProgramSuccessMessage(expectedMessage);
  295 |         return true;
  296 |       } else {
  297 |         await this.verifyProgramErrorMessage(expectedMessage);
  298 |         return false;
  299 |       }
  300 |     }
  301 |   }
  302 |   async verifyProgramSuccessMessage(expectedMessage) {
  303 |     try {
  304 |       // Wait for the toast to appear using role="alert"
  305 |       await this.page.locator('[role="alert"]').first().waitFor({
  306 |         state: 'visible',
  307 |         timeout: 10000
  308 |       });
  309 | 
  310 |       const detailMessage = this.page.locator('.p-toast-detail');
  311 |       await detailMessage.first().waitFor({ state: 'visible', timeout: 5000 });
  312 |       const actualMessage = await detailMessage.first().textContent();
  313 |       if (!actualMessage.includes(expectedMessage)) {
  314 |         throw new Error(`Success message mismatch. Expected: "${expectedMessage}", Got: "${actualMessage}"`);
  315 |       }
  316 |       const summary = this.page.locator('.p-toast-summary');
  317 |       const summaryText = await summary.first().textContent();
  318 | 
  319 |     } catch (error) {
  320 | 
  321 |       try {
  322 |         const message = this.page.getByText('Program Created Successfully');
  323 |         await message.waitFor({ state: 'visible', timeout: 5000 });
  324 |         const text = await message.textContent();
  325 |         return;
  326 |       } catch (e) {
  327 |         // Ignore
  328 |       }
  329 |       throw new Error(`Success message not found: ${error.message}`);
  330 |     }
  331 |   }
  332 |   async verifyProgramErrorMessage(expectedMessage) {
  333 |     try {
  334 |       await this.page.waitForTimeout(1000);
  335 |       const errorElements = this.page.locator('small.p-invalid');
  336 |       const count = await errorElements.count();
  337 |       let found = false;
  338 |       for (let i = 0; i < count; i++) {
  339 |         const text = await errorElements.nth(i).textContent();
  340 |         const trimmedText = text?.trim();
  341 |         if (trimmedText && trimmedText.length > 0) {
  342 |           if (trimmedText.includes(expectedMessage) || expectedMessage.includes(trimmedText)) {
  343 |             found = true;
  344 |             break;
  345 |           }
  346 |         }
  347 |       }
  348 | 
  349 |       if (!found) {
  350 |         throw new Error(`Error message not found for: "${expectedMessage}"`);
  351 |       }
  352 | 
  353 |     } catch (error) {
  354 |       throw new Error(`Error message verification failed: ${error.message}`);
  355 |     }
  356 |   }
  357 |   async verifyProgramInSearchResults(programName) {
  358 |     try {
  359 |       await this.page.waitForTimeout(1000);
  360 |       const row = this.page.locator(`table tbody tr:has-text("${programName}")`);
  361 |       const count = await row.count();
  362 | 
  363 |       if (count === 0) {
  364 |         throw new Error(`Program "${programName}" not found in search results`);
  365 |       }
  366 | 
  367 |       const cells = row.locator('td');
  368 |       const name = await cells.nth(0).textContent();
  369 |       const description = await cells.nth(1).textContent();
  370 |       const status = await cells.nth(2).textContent();
  371 |       return { name, description, status };
  372 |     } catch (error) {
> 373 |       throw new Error(`Program not found: ${error.message}`);
      |             ^ Error: Program not found: Program "Updatedxrvazm" not found in search results
  374 |     }
  375 |   }
  376 | 
  377 |   async verifyProgramByDescription(description) {
  378 |     try {
  379 |       await this.page.waitForTimeout(1000);
  380 |       const row = this.page.locator(`table tbody tr:has-text("${description}")`);
  381 |       const count = await row.count();
  382 |       if (count === 0) {
  383 |         throw new Error(`Program with description "${description}" not found`);
  384 |       }
  385 |       const cells = row.locator('td');
  386 |       const name = await cells.nth(0).textContent();
  387 |       const desc = await cells.nth(1).textContent();
  388 |       const status = await cells.nth(2).textContent();
  389 |       return { name, description: desc, status };
  390 |     } catch (error) {
  391 |       throw new Error(`Description not found: ${error.message}`);
  392 |     }
  393 |   }
  394 | 
  395 |   async verifyPartialSearchResults(partialName) {
  396 |     try {
  397 |       await this.page.waitForTimeout(1000);
  398 |       if (!this.tableRows) {
  399 |         throw new Error('tableRows locator is not defined');
  400 |       }
  401 |       const rows = await this.tableRows.all();
  402 |       const rowCount = rows.length;
  403 |       if (rowCount === 0) {
  404 |         console.log(`No results found for partial search: "${partialName}"`);
  405 |         return [];
  406 |       }
  407 |       const results = [];
  408 |       for (let i = 0; i < rowCount; i++) {
  409 |         const cells = rows[i].locator('td');
  410 |         const name = await cells.nth(0).textContent();
  411 |         results.push(name?.trim());
  412 |       }
  413 |       return results;
  414 |     } catch (error) {
  415 |       throw new Error(`Partial search failed: ${error.message}`);
  416 |     }
  417 |   }
  418 |   async verifyNoResults() {
  419 |     try {
  420 |       await this.page.waitForTimeout(1000);
  421 |       const rowCount = await this.tableRows.count();
  422 |       const noResultsVisible = await this.page.getByText('Showing 0 to 0 of 0 entries').isVisible().catch(() => false);
  423 |       if (rowCount === 0 || noResultsVisible) {
  424 |         console.log(' No results found as expected');
  425 |         return true;
  426 |       }
  427 |       throw new Error('Expected zero results but found results');
  428 |     } catch (error) {
  429 |       throw new Error(`No results verification failed: ${error.message}`);
  430 |     }
  431 |   }
  432 |   //----------Edit methods---------------
  433 | 
  434 | 
  435 |   //  Click edit on the first program in the table
  436 |   async clickEditOnFirstProgram() {
  437 |     await this.page.keyboard.press('Escape');
  438 |     await this.page.waitForTimeout(300);
  439 | 
  440 |     const firstRow = this.tableRows.first();
  441 |     await firstRow.locator('#editProgram').click();
  442 | 
  443 |     console.log(' Edit dialog opened');
  444 |   }
  445 | 
  446 |   async verifyDialogVisible() {
  447 |     await this.editDialogue.waitFor({ state: 'visible', timeout: 5000 });
  448 |     const isVisible = await this.editDialogue.isVisible();
  449 |     if (!isVisible) {
  450 |       throw new Error('Program Details dialog is not displayed');
  451 |     }
  452 |     console.log('Program Details dialog is displayed');
  453 |   }
  454 |   async editProgramName(newName) {
  455 |     await this.progrmForEdit.clear();
  456 |     await this.progrmForEdit.fill(newName);
  457 |     console.log(`Program name updated to: "${newName}"`);
  458 |   }
  459 | 
  460 |   async editProgramDescription(newDescription) {
  461 |     await this.descriptionForEdit.clear();
  462 |     await this.descriptionForEdit.fill(newDescription);
  463 |     console.log(` Program description updated to: "${newDescription}"`);
  464 |   }
  465 | 
  466 |   async editProgramStatus(newStatus) {
  467 |     if (newStatus.toLowerCase() === 'active') {
  468 |       await this.activeBtnForEdit.click();
  469 |     } else if (newStatus.toLowerCase() === 'inactive') {
  470 |       await this.inactiveBtnForEdit.click();
  471 |     }
  472 |     console.log(`Status updated to: ${newStatus}`);
  473 |   }
```