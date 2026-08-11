# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/03_program.feature.spec.js >> Program Page Verification >> Sorting of Program status in Descending order
- Location: .features-gen/features/03_program.feature.spec.js:227:3

# Error details

```
TypeError: programFixture.navigate is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]: LMS - Learning Management System
      - generic [ref=e6]:
        - button "Home" [ref=e7] [cursor=pointer]
        - button "Program" [expanded] [ref=e8] [cursor=pointer]
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
          - rowgroup [ref=e46]:
            - row [ref=e47]:
              - gridcell [ref=e48]:
                - generic [ref=e50] [cursor=pointer]:
                  - generic [ref=e51]:
                    - checkbox
                  - checkbox [ref=e52]
              - gridcell "Docker-rf" [ref=e53]
              - gridcell "Updated eskkpq" [ref=e54]
              - gridcell "Active" [ref=e55]
              - gridcell [ref=e56]:
                - generic [ref=e58]:
                  - button [ref=e59] [cursor=pointer]:
                    - generic [ref=e60]: 
                  - button [ref=e61] [cursor=pointer]:
                    - generic [ref=e62]: 
            - row [ref=e63]:
              - gridcell [ref=e64]:
                - generic [ref=e66] [cursor=pointer]:
                  - generic [ref=e67]:
                    - checkbox
                  - checkbox [ref=e68]
              - gridcell "Updateddqlsap" [ref=e69]
              - gridcell "Intro to Java" [ref=e70]
              - gridcell "Active" [ref=e71]
              - gridcell [ref=e72]:
                - generic [ref=e74]:
                  - button [ref=e75] [cursor=pointer]:
                    - generic [ref=e76]: 
                  - button [ref=e77] [cursor=pointer]:
                    - generic [ref=e78]: 
            - row [ref=e79]:
              - gridcell [ref=e80]:
                - generic [ref=e82] [cursor=pointer]:
                  - generic [ref=e83]:
                    - checkbox
                  - checkbox [ref=e84]
              - gridcell "Programtsnegoqf" [ref=e85]
              - gridcell "Playwright automation" [ref=e86]
              - gridcell "Active" [ref=e87]
              - gridcell [ref=e88]:
                - generic [ref=e90]:
                  - button [ref=e91] [cursor=pointer]:
                    - generic [ref=e92]: 
                  - button [ref=e93] [cursor=pointer]:
                    - generic [ref=e94]: 
            - row [ref=e95]:
              - gridcell [ref=e96]:
                - generic [ref=e98] [cursor=pointer]:
                  - generic [ref=e99]:
                    - checkbox
                  - checkbox [ref=e100]
              - gridcell "Updatedsjmlfu" [ref=e101]
              - gridcell "DevOps" [ref=e102]
              - gridcell "Active" [ref=e103]
              - gridcell [ref=e104]:
                - generic [ref=e106]:
                  - button [ref=e107] [cursor=pointer]:
                    - generic [ref=e108]: 
                  - button [ref=e109] [cursor=pointer]:
                    - generic [ref=e110]: 
            - row [ref=e111]:
              - gridcell [ref=e112]:
                - generic [ref=e114] [cursor=pointer]:
                  - generic [ref=e115]:
                    - checkbox
                  - checkbox [ref=e116]
              - gridcell "Updateddrxbpg" [ref=e117]
              - gridcell "Intro to Java" [ref=e118]
              - gridcell "Active" [ref=e119]
              - gridcell [ref=e120]:
                - generic [ref=e122]:
                  - button [ref=e123] [cursor=pointer]:
                    - generic [ref=e124]: 
                  - button [ref=e125] [cursor=pointer]:
                    - generic [ref=e126]: 
            - row [ref=e127]:
              - gridcell [ref=e128]:
                - generic [ref=e130] [cursor=pointer]:
                  - generic [ref=e131]:
                    - checkbox
                  - checkbox [ref=e132]
              - gridcell "HBDDBrigade-BDD" [ref=e133]
              - gridcell [ref=e134]
              - gridcell "Active" [ref=e135]
              - gridcell [ref=e136]:
                - generic [ref=e138]:
                  - button [ref=e139] [cursor=pointer]:
                    - generic [ref=e140]: 
                  - button [ref=e141] [cursor=pointer]:
                    - generic [ref=e142]: 
            - row [ref=e143]:
              - gridcell [ref=e144]:
                - generic [ref=e146] [cursor=pointer]:
                  - generic [ref=e147]:
                    - checkbox
                  - checkbox [ref=e148]
              - gridcell "HBDDBrigade-PW" [ref=e149]
              - gridcell [ref=e150]
              - gridcell "Active" [ref=e151]
              - gridcell [ref=e152]:
                - generic [ref=e154]:
                  - button [ref=e155] [cursor=pointer]:
                    - generic [ref=e156]: 
                  - button [ref=e157] [cursor=pointer]:
                    - generic [ref=e158]: 
            - row [ref=e159]:
              - gridcell [ref=e160]:
                - generic [ref=e162] [cursor=pointer]:
                  - generic [ref=e163]:
                    - checkbox
                  - checkbox [ref=e164]
              - gridcell "uWfYEKDapL" [ref=e165]
              - gridcell [ref=e166]
              - gridcell "Active" [ref=e167]
              - gridcell [ref=e168]:
                - generic [ref=e170]:
                  - button [ref=e171] [cursor=pointer]:
                    - generic [ref=e172]: 
                  - button [ref=e173] [cursor=pointer]:
                    - generic [ref=e174]: 
            - row [ref=e175]:
              - gridcell [ref=e176]:
                - generic [ref=e178] [cursor=pointer]:
                  - generic [ref=e179]:
                    - checkbox
                  - checkbox [ref=e180]
              - gridcell "uQukRlKdOB" [ref=e181]
              - gridcell [ref=e182]
              - gridcell "Active" [ref=e183]
              - gridcell [ref=e184]:
                - generic [ref=e186]:
                  - button [ref=e187] [cursor=pointer]:
                    - generic [ref=e188]: 
                  - button [ref=e189] [cursor=pointer]:
                    - generic [ref=e190]: 
            - row [ref=e191]:
              - gridcell [ref=e192]:
                - generic [ref=e194] [cursor=pointer]:
                  - generic [ref=e195]:
                    - checkbox
                  - checkbox [ref=e196]
              - gridcell "cobal-f" [ref=e197]
              - gridcell "Intro to Java" [ref=e198]
              - gridcell "Active" [ref=e199]
              - gridcell [ref=e200]:
                - generic [ref=e202]:
                  - button [ref=e203] [cursor=pointer]:
                    - generic [ref=e204]: 
                  - button [ref=e205] [cursor=pointer]:
                    - generic [ref=e206]: 
        - generic [ref=e208]:
          - generic [ref=e209] [cursor=pointer]: Showing 1 to 10 of 22 entries
          - button "" [disabled]
          - button "" [disabled]
          - generic [ref=e210]:
            - button "1" [ref=e211] [cursor=pointer]
            - button "2" [ref=e212] [cursor=pointer]
            - button "3" [ref=e213] [cursor=pointer]
          - button "" [ref=e214] [cursor=pointer]
          - button "" [ref=e216] [cursor=pointer]
        - generic [ref=e218]: In total there are 22 programs.
  - menu [ref=e222]:
    - menuitem "Add New Program" [active] [ref=e224] [cursor=pointer]
```

# Test source

```ts
  331 |   // Step: When Admin clicks yes button after clicking delete icon of program
  332 |   // From: features\03_program.feature:148:3
  333 |   await programFixture.clickYesOnDeleteConfirmation();
  334 | });
  335 | 
  336 | Then('Admin should see the successful message and the program should be deleted', async ({programFixture}) => {
  337 |   // Step: Then Admin should see the successful message and the program should be deleted
  338 |   // From: features\03_program.feature:149:3
  339 |   await programFixture.verifyProgramDeletedSuccessfully();
  340 | });
  341 | When('Admin clicks  no button after clicking delete icon of program', async ({programFixture}) => {
  342 |   // Step: When Admin clicks  no button after clicking delete icon of program
  343 |   // From: features\03_program.feature:154:3
  344 |   await programFixture.clickNoOnDeleteConfirmation();
  345 | });
  346 | 
  347 | Then('Admin should see the alert box closed and the program is not deleted', async ({programFixture}) => {
  348 |   // Step: Then Admin should see the alert box closed and the program is not deleted
  349 |   // From: features\03_program.feature:155:3
  350 |   await programFixture.verifyAlertBoxClosedAndProgramNotDeleted();
  351 |   
  352 | });
  353 | When('Admin clicks on the close icon on confirm alert box of program', async ({programFixture}) => {
  354 |   // Step: When Admin clicks on the close icon on confirm alert box of program
  355 |   // From: features\03_program.feature:160:3
  356 |   await programFixture.clickCloseOnDeleteConfirmation();
  357 | });
  358 | 
  359 | Then('Admin should see the alert box closed and see program page', async ({programFixture}) => {
  360 |   // Step: Then Admin should see the alert box closed and see program page
  361 |   // From: features\03_program.feature:161:3
  362 |   
  363 |   await programFixture.verifyAlertBoxClosedAndProgramPageVisible();
  364 | });
  365 | 
  366 | 
  367 | 
  368 | 
  369 | 
  370 | // let programPage;
  371 | 
  372 | // Given('Admin is on Program page', async ({ page, loginFixture }) => {
  373 | //   programPage = new ProgramPage(page);
  374 | //   await loginFixture.loginWithCredentials(process.env.EMAIL, process.env.PASSWORD, process.env.ROLE);
  375 | //   await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
  376 | //   await programPage.navigate();
  377 | // });
  378 | 
  379 | When('Admin clicks on Arrow next to program Name', async ({programFixture}) => {
  380 |   await programFixture.clickProgramNameArrow();
  381 | });
  382 | 
  383 | Then('Admin should see the Program Name is sorted in Ascending order', async ({programFixture}) => {
  384 |   const names = await programFixture.getProgramNames();
  385 |   expect(programFixture.isSortedAscending(names)).toBe(true);
  386 | });
  387 | 
  388 | Given('Admin is in program page where Program names are sorted in ascending order', async ({programFixture}) => {
  389 |   await programFixture.navigate();
  390 |   await programFixture.clickProgramNameArrow();
  391 |   const sortedNames = await programFixture.getProgramNames();
  392 |   expect(programFixture.isSortedAscending(sortedNames)).toBe(true);
  393 | });
  394 | 
  395 | Then('Admin should see the Program Name is sorted in Descending order', async ({programFixture}) => {
  396 |   const names = await programFixture.getProgramNames();
  397 |   expect(programFixture.isSortedDescending(names)).toBe(true);
  398 | });
  399 | 
  400 | When('Admin clicks on Arrow next to Program Description', async ({programFixture}) => {
  401 |   await programFixture.clickProgramDescriptionArrow();
  402 | });
  403 | 
  404 | Then('Admin should see the Program Description is sorted in Ascending order', async ({programFixture}) => {
  405 |   const descriptions = await programFixture.getProgramDescriptions();
  406 |   expect(programFixture.isSortedAscending(descriptions)).toBe(true);
  407 | });
  408 | 
  409 | Given('Admin is in program page where Program descriptions are sorted in ascending order', async ({programFixture}) => {
  410 |   await programFixture.navigate();
  411 |   await programFixture.clickProgramDescriptionArrow();
  412 |   const sortedDescriptions = await programFixture.getProgramDescriptions();
  413 |   expect(programFixture.isSortedAscending(sortedDescriptions)).toBe(true);
  414 | });
  415 | 
  416 | Then('Admin should see the Program Description is sorted in Descending order', async ({programFixture}) => {
  417 |   const descriptions = await programFixture.getProgramDescriptions();
  418 |   expect(programFixture.isSortedDescending(descriptions)).toBe(true);
  419 | });
  420 | 
  421 | When('Admin clicks on Arrow next to Program status', async ({programFixture}) => {
  422 |   await programFixture.clickProgramStatusArrow();
  423 | });
  424 | 
  425 | Then('Admin should see the Program status sorted in Ascending order', async ({programFixture}) => {
  426 |   const statuses = await programFixture.getProgramStatuses();
  427 |   expect(programFixture.isSortedAscending(statuses)).toBe(true);
  428 | });
  429 | 
  430 | Given('Admin is in program page where Program status are sorted in ascending order', async ({programFixture}) => {
> 431 |   await programFixture.navigate();
      |                        ^ TypeError: programFixture.navigate is not a function
  432 |   await programFixture.clickProgramStatusArrow();
  433 |   const sortedStatuses = await programFixture.getProgramStatuses();
  434 |   expect(programFixture.isSortedAscending(sortedStatuses)).toBe(true);
  435 | });
  436 | 
  437 | Then('Admin should see the Program status sorted in Descending order', async ({programFixture}) => {
  438 |   const statuses = await programFixture.getProgramStatuses();
  439 |   expect(programFixture.isSortedDescending(statuses)).toBe(true);
  440 | });
  441 | 
  442 | // Delete multiple programs
  443 | When('Admin selects more than one program by clicking on the checkbox', async ({ programFixture }) => {
  444 |   await programFixture.selectMultipleRows([0, 1]);
  445 | });
  446 | 
  447 | Then('the multiple delete button under manage program must be enabled', async ({ programFixture }) => {
  448 |   const isEnabled = await programFixture.isDeleteButtonEnabled();
  449 |   expect(isEnabled).toBe(true);
  450 | });
  451 | 
  452 | Given('Admin has selected multiple programs', async ({ programFixture }) => {
  453 |   await programFixture.selectMultipleRows([0, 1]);
  454 | });
  455 | 
  456 | When('Admin clicks on the delete button on the left top of the program page', async ({ programFixture }) => {
  457 |   await programFixture.clickDeleteButton();
  458 | });
  459 | 
  460 | Then('Admin lands on the Confirmation form', async ({ programFixture }) => {
  461 |   const isVisible = await programFixture.isConfirmDialogVisible();
  462 |   expect(isVisible).toBe(true);
  463 | });
  464 | 
  465 | Given('Admin is on the Confirmation form', async ({ programFixture }) => {
  466 |   await programFixture.selectMultipleRows([0]);
  467 |   await programFixture.clickDeleteButton();
  468 |   const isVisible = await programFixture.isConfirmDialogVisible();
  469 |   expect(isVisible).toBe(true);
  470 | });
  471 | 
  472 | When('Admin clicks on "Yes" button', async ({ programFixture }) => {
  473 |   await programFixture.clickYesButton();
  474 | });
  475 | 
  476 | Then('Admin can see "Successful Programs Deleted" message', async ({ programFixture }) => {
  477 |   const message = await programFixture.getToastMessage();
  478 |   expect(message).toContain('Successful Programs Deleted');
  479 | });
  480 | 
  481 | Given('Admin has deleted a program', async ({ programFixture }) => {
  482 |   await programFixture.selectMultipleRows([0]);
  483 |   await programFixture.clickDeleteButton();
  484 |   await programFixture.clickYesButton();
  485 | });
  486 | 
  487 | When('Admin searches for "Deleted Program names"', async ({ programFixture }) => {
  488 |   await programFixture.searchProgram('deleted-program-test');
  489 | });
  490 | 
  491 | When('Admin clicks on "No" button', async ({ programFixture }) => {
  492 |   await programFixture.clickNoButton();
  493 | });
  494 | 
  495 | Then('Admin can see Programs are still selected and not deleted', async ({ programFixture }) => {
  496 |   const selectedCount = await programFixture.getSelectedRowCount();
  497 |   expect(selectedCount).toBeGreaterThanOrEqual(1);
  498 |   const tableVisible = await programFixture.isTableVisible();
  499 |   expect(tableVisible).toBe(true);
  500 | });
  501 | 
  502 | Given('Admin is on the Program Confirm Deletion Page after selecting a program to delete', async ({ programFixture }) => {
  503 |   await programFixture.selectMultipleRows([0]);
  504 |   await programFixture.clickDeleteButton();
  505 |   const isVisible = await programFixture.isConfirmDialogVisible();
  506 |   expect(isVisible).toBe(true);
  507 | });
  508 | 
  509 | When('Admin Click on "X" button', async ({ programFixture }) => {
  510 |   await programFixture.clickCloseButton();
  511 | });
  512 | 
  513 | Then('Admin can see Confirm Deletion form disappear', async ({ programFixture }) => {
  514 |   const isVisible = await programFixture.isConfirmDialogVisible();
  515 |   expect(isVisible).toBe(false);
  516 | });
  517 | 
  518 | // Pagination
  519 | 
  520 | Given('Admin is logged in to LMS', async ({ page, loginFixture }) => {
  521 |   await loginFixture.loginWithCredentials(process.env.EMAIL, process.env.PASSWORD, process.env.ROLE);
  522 |   await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
  523 | });
  524 | 
  525 | Given('Admin is on the Program page with multiple records', async ({ programFixture }) => {
  526 |   await programFixture.navigateToProgram();
  527 |   const rowCount = await programFixture.getTableRowCount();
  528 |   expect(rowCount).toBeGreaterThan(0);
  529 | });
  530 | 
  531 | Given('Admin is on any page except the last page of Program table', async ({ programFixture }) => {
```