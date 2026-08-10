# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/03_program.feature.spec.js >> Program Page Verification >> Add new program with valid details >> Example #10
- Location: .features-gen/features/03_program.feature.spec.js:100:5

# Error details

```
Error: Error message verification failed: Error message not found for: "This field should start with an alphabet and min 2 char."
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
  - generic [ref=e11]:
    - alert [ref=e15]:
      - generic [ref=e16]: 
      - generic [ref=e17]:
        - generic [ref=e18]: Failed
        - generic [ref=e19]: "Bad Request: Http failure response for https://lms-frontend-hackathon-6dcccb9dd0fa.herokuapp.com/api/saveprogram: 400 Bad Request"
      - button ""
    - generic [ref=e22]:
      - generic [ref=e23]:
        - generic [ref=e24]: Manage Program
        - generic [ref=e25]:
          - button [disabled] [ref=e27]:
            - generic [ref=e28]: 
          - generic [ref=e30]:
            - generic [ref=e31]: 
            - textbox "Search..." [ref=e32]
      - generic [ref=e35]:
        - grid [ref=e37]:
          - rowgroup [ref=e38]:
            - row [ref=e39]:
              - columnheader [ref=e40]:
                - generic [ref=e42] [cursor=pointer]:
                  - generic [ref=e43]:
                    - checkbox
                  - checkbox [ref=e44]
              - columnheader "Program Name " [ref=e45] [cursor=pointer]:
                - text: Program Name
                - generic [ref=e46]: 
              - columnheader "Program Description " [ref=e48] [cursor=pointer]:
                - text: Program Description
                - generic [ref=e49]: 
              - columnheader "Program Status " [ref=e51] [cursor=pointer]:
                - text: Program Status
                - generic [ref=e52]: 
              - columnheader "Edit / Delete" [ref=e54]
          - rowgroup [ref=e55]:
            - row [ref=e56]:
              - gridcell [ref=e57]:
                - generic [ref=e59] [cursor=pointer]:
                  - generic [ref=e60]:
                    - checkbox
                  - checkbox [ref=e61]
              - gridcell "Updatedsfsctm" [ref=e62]
              - gridcell "Updated deryg" [ref=e63]
              - gridcell "Active" [ref=e64]
              - gridcell [ref=e65]:
                - generic [ref=e67]:
                  - button [ref=e68] [cursor=pointer]:
                    - generic [ref=e69]: 
                  - button [ref=e70] [cursor=pointer]:
                    - generic [ref=e71]: 
            - row [ref=e72]:
              - gridcell [ref=e73]:
                - generic [ref=e75] [cursor=pointer]:
                  - generic [ref=e76]:
                    - checkbox
                  - checkbox [ref=e77]
              - gridcell "vanivom" [ref=e78]
              - gridcell "Updated Playwright desc" [ref=e79]
              - gridcell "Active" [ref=e80]
              - gridcell [ref=e81]:
                - generic [ref=e83]:
                  - button [ref=e84] [cursor=pointer]:
                    - generic [ref=e85]: 
                  - button [ref=e86] [cursor=pointer]:
                    - generic [ref=e87]: 
            - row [ref=e88]:
              - gridcell [ref=e89]:
                - generic [ref=e91] [cursor=pointer]:
                  - generic [ref=e92]:
                    - checkbox
                  - checkbox [ref=e93]
              - gridcell "Programezpbwfb" [ref=e94]
              - gridcell "Azure Cloud" [ref=e95]
              - gridcell "Active" [ref=e96]
              - gridcell [ref=e97]:
                - generic [ref=e99]:
                  - button [ref=e100] [cursor=pointer]:
                    - generic [ref=e101]: 
                  - button [ref=e102] [cursor=pointer]:
                    - generic [ref=e103]: 
            - row [ref=e104]:
              - gridcell [ref=e105]:
                - generic [ref=e107] [cursor=pointer]:
                  - generic [ref=e108]:
                    - checkbox
                  - checkbox [ref=e109]
              - gridcell "pppp" [ref=e110]
              - gridcell [ref=e111]
              - gridcell "Active" [ref=e112]
              - gridcell [ref=e113]:
                - generic [ref=e115]:
                  - button [ref=e116] [cursor=pointer]:
                    - generic [ref=e117]: 
                  - button [ref=e118] [cursor=pointer]:
                    - generic [ref=e119]: 
            - row [ref=e120]:
              - gridcell [ref=e121]:
                - generic [ref=e123] [cursor=pointer]:
                  - generic [ref=e124]:
                    - checkbox
                  - checkbox [ref=e125]
              - gridcell "Updatedshjowy" [ref=e126]
              - gridcell "Updated lzcbffy" [ref=e127]
              - gridcell "Active" [ref=e128]
              - gridcell [ref=e129]:
                - generic [ref=e131]:
                  - button [ref=e132] [cursor=pointer]:
                    - generic [ref=e133]: 
                  - button [ref=e134] [cursor=pointer]:
                    - generic [ref=e135]: 
            - row [ref=e136]:
              - gridcell [ref=e137]:
                - generic [ref=e139] [cursor=pointer]:
                  - generic [ref=e140]:
                    - checkbox
                  - checkbox [ref=e141]
              - gridcell "Updatedrnuega" [ref=e142]
              - gridcell [ref=e143]
              - gridcell "Active" [ref=e144]
              - gridcell [ref=e145]:
                - generic [ref=e147]:
                  - button [ref=e148] [cursor=pointer]:
                    - generic [ref=e149]: 
                  - button [ref=e150] [cursor=pointer]:
                    - generic [ref=e151]: 
            - row [ref=e152]:
              - gridcell [ref=e153]:
                - generic [ref=e155] [cursor=pointer]:
                  - generic [ref=e156]:
                    - checkbox
                  - checkbox [ref=e157]
              - gridcell "ZSnTgbGYem" [ref=e158]
              - gridcell "Updated omqu" [ref=e159]
              - gridcell "Active" [ref=e160]
              - gridcell [ref=e161]:
                - generic [ref=e163]:
                  - button [ref=e164] [cursor=pointer]:
                    - generic [ref=e165]: 
                  - button [ref=e166] [cursor=pointer]:
                    - generic [ref=e167]: 
            - row [ref=e168]:
              - gridcell [ref=e169]:
                - generic [ref=e171] [cursor=pointer]:
                  - generic [ref=e172]:
                    - checkbox
                  - checkbox [ref=e173]
              - gridcell "Updatedojyqmc" [ref=e174]
              - gridcell [ref=e175]
              - gridcell "Active" [ref=e176]
              - gridcell [ref=e177]:
                - generic [ref=e179]:
                  - button [ref=e180] [cursor=pointer]:
                    - generic [ref=e181]: 
                  - button [ref=e182] [cursor=pointer]:
                    - generic [ref=e183]: 
            - row [ref=e184]:
              - gridcell [ref=e185]:
                - generic [ref=e187] [cursor=pointer]:
                  - generic [ref=e188]:
                    - checkbox
                  - checkbox [ref=e189]
              - gridcell "vaniomna" [ref=e190]
              - gridcell "Updated ksdn" [ref=e191]
              - gridcell "Active" [ref=e192]
              - gridcell [ref=e193]:
                - generic [ref=e195]:
                  - button [ref=e196] [cursor=pointer]:
                    - generic [ref=e197]: 
                  - button [ref=e198] [cursor=pointer]:
                    - generic [ref=e199]: 
            - row [ref=e200]:
              - gridcell [ref=e201]:
                - generic [ref=e203] [cursor=pointer]:
                  - generic [ref=e204]:
                    - checkbox
                  - checkbox [ref=e205]
              - gridcell "Updatedkijjxn" [ref=e206]
              - gridcell "Azure Cloud" [ref=e207]
              - gridcell "Active" [ref=e208]
              - gridcell [ref=e209]:
                - generic [ref=e211]:
                  - button [ref=e212] [cursor=pointer]:
                    - generic [ref=e213]: 
                  - button [ref=e214] [cursor=pointer]:
                    - generic [ref=e215]: 
        - generic [ref=e217]:
          - generic [ref=e218] [cursor=pointer]: Showing 1 to 10 of 108 entries
          - button "" [disabled]
          - button "" [disabled]
          - generic [ref=e219]:
            - button "1" [ref=e220] [cursor=pointer]
            - button "2" [ref=e221] [cursor=pointer]
            - button "3" [ref=e222] [cursor=pointer]
            - button "4" [ref=e223] [cursor=pointer]
            - button "5" [ref=e224] [cursor=pointer]
          - button "" [ref=e225] [cursor=pointer]
          - button "" [ref=e227] [cursor=pointer]
        - generic [ref=e229]: In total there are 108 programs.
```

# Test source

```ts
  255 |     const activeVisible = await this.activeRadio.isVisible();
  256 |     const inactiveVisible = await this.inactiveRadio.isVisible();
  257 |     if (!activeVisible || !inactiveVisible) {
  258 |       throw new Error('Status radio buttons are not visible');
  259 |     }
  260 |   }
  261 |   async clickProgramSaveButton() {
  262 |     await this.saveBtn.click();
  263 |   }
  264 |   async fillProgramDetails(name, description, status) {
  265 |     if (name !== undefined) {
  266 |       await this.nameField.clear();
  267 |       if (name) await this.nameField.fill(name);
  268 |     }
  269 | 
  270 |     if (description !== undefined) {
  271 |       await this.descriptionField.clear();
  272 |       if (description) await this.descriptionField.fill(description);
  273 |     }
  274 | 
  275 |     if (status) {
  276 |       if (status.toLowerCase() === 'active') {
  277 |         await this.activeRadio.click();
  278 |       } else if (status.toLowerCase() === 'inactive') {
  279 |         await this.inactiveRadio.click();
  280 |       }
  281 |     }
  282 |   }
  283 |   // Verify message methods
  284 |   async verifyAppropriateMessage(expectedMessage, testType) {
  285 |     if (testType === 'positive') {
  286 |       await this.verifyProgramSuccessMessage(expectedMessage);
  287 |       return true;
  288 |     } else if (testType === 'negative') {
  289 |       await this.verifyProgramErrorMessage(expectedMessage);
  290 |       return false;
  291 |     } else {
  292 | 
  293 |       if (expectedMessage.toLowerCase().includes('success') ||
  294 |         expectedMessage.toLowerCase().includes('created')) {
  295 |         await this.verifyProgramSuccessMessage(expectedMessage);
  296 |         return true;
  297 |       } else {
  298 |         await this.verifyProgramErrorMessage(expectedMessage);
  299 |         return false;
  300 |       }
  301 |     }
  302 |   }
  303 |   async verifyProgramSuccessMessage(expectedMessage) {
  304 |     try {
  305 |       // Wait for the toast to appear using role="alert"
  306 |       await this.page.locator('[role="alert"]').first().waitFor({
  307 |         state: 'visible',
  308 |         timeout: 10000
  309 |       });
  310 | 
  311 |       const detailMessage = this.page.locator('.p-toast-detail');
  312 |       await detailMessage.first().waitFor({ state: 'visible', timeout: 5000 });
  313 |       const actualMessage = await detailMessage.first().textContent();
  314 |       if (!actualMessage.includes(expectedMessage)) {
  315 |         throw new Error(`Success message mismatch. Expected: "${expectedMessage}", Got: "${actualMessage}"`);
  316 |       }
  317 |       const summary = this.page.locator('.p-toast-summary');
  318 |       const summaryText = await summary.first().textContent();
  319 | 
  320 |     } catch (error) {
  321 | 
  322 |       try {
  323 |         const message = this.page.getByText('Program Created Successfully');
  324 |         await message.waitFor({ state: 'visible', timeout: 5000 });
  325 |         const text = await message.textContent();
  326 |         return;
  327 |       } catch (e) {
  328 |         // Ignore
  329 |       }
  330 |       throw new Error(`Success message not found: ${error.message}`);
  331 |     }
  332 |   }
  333 |   async verifyProgramErrorMessage(expectedMessage) {
  334 |     try {
  335 |       await this.page.waitForTimeout(1000);
  336 |       const errorElements = this.page.locator('small.p-invalid');
  337 |       const count = await errorElements.count();
  338 |       let found = false;
  339 |       for (let i = 0; i < count; i++) {
  340 |         const text = await errorElements.nth(i).textContent();
  341 |         const trimmedText = text?.trim();
  342 |         if (trimmedText && trimmedText.length > 0) {
  343 |           if (trimmedText.includes(expectedMessage) || expectedMessage.includes(trimmedText)) {
  344 |             found = true;
  345 |             break;
  346 |           }
  347 |         }
  348 |       }
  349 | 
  350 |       if (!found) {
  351 |         throw new Error(`Error message not found for: "${expectedMessage}"`);
  352 |       }
  353 | 
  354 |     } catch (error) {
> 355 |       throw new Error(`Error message verification failed: ${error.message}`);
      |             ^ Error: Error message verification failed: Error message not found for: "This field should start with an alphabet and min 2 char."
  356 |     }
  357 |   }
  358 |   async verifyProgramInSearchResults(programName) {
  359 |     try {
  360 |       await this.page.waitForTimeout(1000);
  361 |       const row = this.page.locator(`table tbody tr:has-text("${programName}")`);
  362 |       const count = await row.count();
  363 | 
  364 |       if (count === 0) {
  365 |         throw new Error(`Program "${programName}" not found in search results`);
  366 |       }
  367 | 
  368 |       const cells = row.locator('td');
  369 |       const name = await cells.nth(0).textContent();
  370 |       const description = await cells.nth(1).textContent();
  371 |       const status = await cells.nth(2).textContent();
  372 |       return { name, description, status };
  373 |     } catch (error) {
  374 |       throw new Error(`Program not found: ${error.message}`);
  375 |     }
  376 |   }
  377 | 
  378 |   async verifyProgramByDescription(description) {
  379 |     try {
  380 |       await this.page.waitForTimeout(1000);
  381 |       const row = this.page.locator(`table tbody tr:has-text("${description}")`);
  382 |       const count = await row.count();
  383 |       if (count === 0) {
  384 |         throw new Error(`Program with description "${description}" not found`);
  385 |       }
  386 |       const cells = row.locator('td');
  387 |       const name = await cells.nth(0).textContent();
  388 |       const desc = await cells.nth(1).textContent();
  389 |       const status = await cells.nth(2).textContent();
  390 |       return { name, description: desc, status };
  391 |     } catch (error) {
  392 |       throw new Error(`Description not found: ${error.message}`);
  393 |     }
  394 |   }
  395 | 
  396 |   async verifyPartialSearchResults(partialName) {
  397 |     try {
  398 |       await this.page.waitForTimeout(1000);
  399 |       if (!this.tableRows) {
  400 |         throw new Error('tableRows locator is not defined');
  401 |       }
  402 |       const rows = await this.tableRows.all();
  403 |       const rowCount = rows.length;
  404 |       if (rowCount === 0) {
  405 |         console.log(`No results found for partial search: "${partialName}"`);
  406 |         return [];
  407 |       }
  408 |       const results = [];
  409 |       for (let i = 0; i < rowCount; i++) {
  410 |         const cells = rows[i].locator('td');
  411 |         const name = await cells.nth(0).textContent();
  412 |         results.push(name?.trim());
  413 |       }
  414 |       return results;
  415 |     } catch (error) {
  416 |       throw new Error(`Partial search failed: ${error.message}`);
  417 |     }
  418 |   }
  419 |   async verifyNoResults() {
  420 |     try {
  421 |       await this.page.waitForTimeout(1000);
  422 |       const rowCount = await this.tableRows.count();
  423 |       const noResultsVisible = await this.page.getByText('Showing 0 to 0 of 0 entries').isVisible().catch(() => false);
  424 |       if (rowCount === 0 || noResultsVisible) {
  425 |         console.log(' No results found as expected');
  426 |         return true;
  427 |       }
  428 |       throw new Error('Expected zero results but found results');
  429 |     } catch (error) {
  430 |       throw new Error(`No results verification failed: ${error.message}`);
  431 |     }
  432 |   }
  433 |   //----------Edit methods---------------
  434 | 
  435 | 
  436 |   //  Click edit on the first program in the table
  437 |   async clickEditOnFirstProgram() {
  438 |     await this.page.keyboard.press('Escape');
  439 |     await this.page.waitForTimeout(300);
  440 | 
  441 |     const firstRow = this.tableRows.first();
  442 |     await firstRow.locator('#editProgram').click();
  443 | 
  444 |     console.log(' Edit dialog opened');
  445 |   }
  446 | 
  447 |   async verifyDialogVisible() {
  448 |     await this.editDialogue.waitFor({ state: 'visible', timeout: 5000 });
  449 |     const isVisible = await this.editDialogue.isVisible();
  450 |     if (!isVisible) {
  451 |       throw new Error('Program Details dialog is not displayed');
  452 |     }
  453 |     console.log('Program Details dialog is displayed');
  454 |   }
  455 |   async editProgramName(newName) {
```