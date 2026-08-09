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
              - gridcell "vaniwb" [ref=e62]
              - gridcell "Intro to Java" [ref=e63]
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
              - gridcell "vaniwc" [ref=e78]
              - gridcell "Azure Cloud" [ref=e79]
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
              - gridcell "vaniwd" [ref=e94]
              - gridcell "DevOps" [ref=e95]
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
              - gridcell "AIDeepLearningd" [ref=e110]
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
              - gridcell "engineer" [ref=e126]
              - gridcell [ref=e127]
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
              - gridcell "SalesForce" [ref=e142]
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
              - gridcell "sfrew" [ref=e158]
              - gridcell [ref=e159]
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
              - gridcell "CypressLMSApplication" [ref=e174]
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
              - gridcell "CtGwpqIzzq" [ref=e190]
              - gridcell [ref=e191]
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
              - gridcell "TeamLMS" [ref=e206]
              - gridcell [ref=e207]
              - gridcell "Active" [ref=e208]
              - gridcell [ref=e209]:
                - generic [ref=e211]:
                  - button [ref=e212] [cursor=pointer]:
                    - generic [ref=e213]: 
                  - button [ref=e214] [cursor=pointer]:
                    - generic [ref=e215]: 
        - generic [ref=e217]:
          - generic [ref=e218] [cursor=pointer]: Showing 1 to 10 of 68 entries
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
        - generic [ref=e229]: In total there are 68 programs.
```

# Test source

```ts
  250 |     const activeVisible = await this.activeRadio.isVisible();
  251 |     const inactiveVisible = await this.inactiveRadio.isVisible();
  252 |     if (!activeVisible || !inactiveVisible) {
  253 |       throw new Error('Status radio buttons are not visible');
  254 |     }
  255 |   }
  256 |   async clickProgramSaveButton() {
  257 |     await this.saveBtn.click();
  258 |   }
  259 |   async fillProgramDetails(name, description, status) {
  260 |     if (name !== undefined) {
  261 |       await this.nameField.clear();
  262 |       if (name) await this.nameField.fill(name);
  263 |     }
  264 | 
  265 |     if (description !== undefined) {
  266 |       await this.descriptionField.clear();
  267 |       if (description) await this.descriptionField.fill(description);
  268 |     }
  269 | 
  270 |     if (status) {
  271 |       if (status.toLowerCase() === 'active') {
  272 |         await this.activeRadio.click();
  273 |       } else if (status.toLowerCase() === 'inactive') {
  274 |         await this.inactiveRadio.click();
  275 |       }
  276 |     }
  277 |   }
  278 |   // Verify message methods
  279 |   async verifyAppropriateMessage(expectedMessage, testType) {
  280 |     if (testType === 'positive') {
  281 |       await this.verifyProgramSuccessMessage(expectedMessage);
  282 |       return true;
  283 |     } else if (testType === 'negative') {
  284 |       await this.verifyProgramErrorMessage(expectedMessage);
  285 |       return false;
  286 |     } else {
  287 | 
  288 |       if (expectedMessage.toLowerCase().includes('success') ||
  289 |         expectedMessage.toLowerCase().includes('created')) {
  290 |         await this.verifyProgramSuccessMessage(expectedMessage);
  291 |         return true;
  292 |       } else {
  293 |         await this.verifyProgramErrorMessage(expectedMessage);
  294 |         return false;
  295 |       }
  296 |     }
  297 |   }
  298 |   async verifyProgramSuccessMessage(expectedMessage) {
  299 |     try {
  300 |       // Wait for the toast to appear using role="alert"
  301 |       await this.page.locator('[role="alert"]').first().waitFor({
  302 |         state: 'visible',
  303 |         timeout: 10000
  304 |       });
  305 | 
  306 |       const detailMessage = this.page.locator('.p-toast-detail');
  307 |       await detailMessage.first().waitFor({ state: 'visible', timeout: 5000 });
  308 |       const actualMessage = await detailMessage.first().textContent();
  309 |       if (!actualMessage.includes(expectedMessage)) {
  310 |         throw new Error(`Success message mismatch. Expected: "${expectedMessage}", Got: "${actualMessage}"`);
  311 |       }
  312 |       const summary = this.page.locator('.p-toast-summary');
  313 |       const summaryText = await summary.first().textContent();
  314 | 
  315 |     } catch (error) {
  316 | 
  317 |       try {
  318 |         const message = this.page.getByText('Program Created Successfully');
  319 |         await message.waitFor({ state: 'visible', timeout: 5000 });
  320 |         const text = await message.textContent();
  321 |         return;
  322 |       } catch (e) {
  323 |         // Ignore
  324 |       }
  325 |       throw new Error(`Success message not found: ${error.message}`);
  326 |     }
  327 |   }
  328 |   async verifyProgramErrorMessage(expectedMessage) {
  329 |     try {
  330 |       await this.page.waitForTimeout(1000);
  331 |       const errorElements = this.page.locator('small.p-invalid');
  332 |       const count = await errorElements.count();
  333 |       let found = false;
  334 |       for (let i = 0; i < count; i++) {
  335 |         const text = await errorElements.nth(i).textContent();
  336 |         const trimmedText = text?.trim();
  337 |         if (trimmedText && trimmedText.length > 0) {
  338 |           if (trimmedText.includes(expectedMessage) || expectedMessage.includes(trimmedText)) {
  339 |             found = true;
  340 |             break;
  341 |           }
  342 |         }
  343 |       }
  344 | 
  345 |       if (!found) {
  346 |         throw new Error(`Error message not found for: "${expectedMessage}"`);
  347 |       }
  348 | 
  349 |     } catch (error) {
> 350 |       throw new Error(`Error message verification failed: ${error.message}`);
      |             ^ Error: Error message verification failed: Error message not found for: "This field should start with an alphabet and min 2 char."
  351 |     }
  352 |   }
  353 |   async verifyProgramInSearchResults(programName) {
  354 |     try {
  355 |       await this.page.waitForTimeout(1000);
  356 |       const row = this.page.locator(`table tbody tr:has-text("${programName}")`);
  357 |       const count = await row.count();
  358 | 
  359 |       if (count === 0) {
  360 |         throw new Error(`Program "${programName}" not found in search results`);
  361 |       }
  362 | 
  363 |       const cells = row.locator('td');
  364 |       const name = await cells.nth(0).textContent();
  365 |       const description = await cells.nth(1).textContent();
  366 |       const status = await cells.nth(2).textContent();
  367 |       return { name, description, status };
  368 |     } catch (error) {
  369 |       throw new Error(`Program not found: ${error.message}`);
  370 |     }
  371 |   }
  372 | 
  373 |   async verifyProgramByDescription(description) {
  374 |     try {
  375 |       await this.page.waitForTimeout(1000);
  376 |       const row = this.page.locator(`table tbody tr:has-text("${description}")`);
  377 |       const count = await row.count();
  378 |       if (count === 0) {
  379 |         throw new Error(`Program with description "${description}" not found`);
  380 |       }
  381 |       const cells = row.locator('td');
  382 |       const name = await cells.nth(0).textContent();
  383 |       const desc = await cells.nth(1).textContent();
  384 |       const status = await cells.nth(2).textContent();
  385 |       return { name, description: desc, status };
  386 |     } catch (error) {
  387 |       throw new Error(`Description not found: ${error.message}`);
  388 |     }
  389 |   }
  390 | 
  391 |   async verifyPartialSearchResults(partialName) {
  392 |     try {
  393 |       await this.page.waitForTimeout(1000);
  394 |       if (!this.tableRows) {
  395 |         throw new Error('tableRows locator is not defined');
  396 |       }
  397 |       const rows = await this.tableRows.all();
  398 |       const rowCount = rows.length;
  399 |       if (rowCount === 0) {
  400 |         console.log(`No results found for partial search: "${partialName}"`);
  401 |         return [];
  402 |       }
  403 |       const results = [];
  404 |       for (let i = 0; i < rowCount; i++) {
  405 |         const cells = rows[i].locator('td');
  406 |         const name = await cells.nth(0).textContent();
  407 |         results.push(name?.trim());
  408 |       }
  409 |       return results;
  410 |     } catch (error) {
  411 |       throw new Error(`Partial search failed: ${error.message}`);
  412 |     }
  413 |   }
  414 |   async verifyNoResults() {
  415 |     try {
  416 |       await this.page.waitForTimeout(1000);
  417 |       const rowCount = await this.tableRows.count();
  418 |       const noResultsVisible = await this.page.getByText('Showing 0 to 0 of 0 entries').isVisible().catch(() => false);
  419 |       if (rowCount === 0 || noResultsVisible) {
  420 |         console.log(' No results found as expected');
  421 |         return true;
  422 |       }
  423 |       throw new Error('Expected zero results but found results');
  424 |     } catch (error) {
  425 |       throw new Error(`No results verification failed: ${error.message}`);
  426 |     }
  427 |   }
  428 | 
  429 |   async navigate() {
  430 |     await this.page.goto('/program');
  431 |     await this.page.waitForLoadState('networkidle');
  432 |   }
  433 | 
  434 |   async clickProgramNameArrow() {
  435 |     await this.page.click(this.programNameHeader);
  436 |   }
  437 | 
  438 |   async clickProgramDescriptionArrow() {
  439 |     await this.page.click(this.programDescriptionHeader);
  440 |   }
  441 | 
  442 |   async clickProgramStatusArrow() {
  443 |     await this.page.click(this.programStatusHeader);
  444 |   }
  445 | 
  446 |   async getProgramNames() {
  447 |     return await this.page.$$eval('table tbody tr td:nth-child(2)', els =>
  448 |       els.map(el => el.textContent.trim())
  449 |     );
  450 |   }
```