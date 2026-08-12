# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/03_program.feature.spec.js >> Program Page Verification >> Next Page Navigation
- Location: .features-gen/features/03_program.feature.spec.js:291:3

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e4]:
    - generic [ref=f1e5]: LMS - Learning Management System
    - generic [ref=f1e6]:
      - button "Home" [ref=f1e7] [cursor=pointer]
      - button "Program" [ref=f1e8] [cursor=pointer]
      - button "Batch" [ref=f1e9] [cursor=pointer]
      - button "Logout" [ref=f1e10] [cursor=pointer]
  - generic [ref=f1e13]:
    - generic [ref=f1e14]:
      - generic [ref=f1e15]: Manage Program
      - generic [ref=f1e16]:
        - button [disabled] [ref=f1e18]:
          - generic [ref=f1e19]: 
        - generic [ref=f1e21]:
          - generic [ref=f1e22]: 
          - textbox "Search..." [ref=f1e23]
    - generic [ref=f1e26]:
      - grid [ref=f1e28]:
        - rowgroup [ref=f1e29]:
          - row [ref=f1e30]:
            - columnheader [ref=f1e31]:
              - generic [ref=f1e33] [cursor=pointer]:
                - generic [ref=f1e34]:
                  - checkbox [disabled]
                - checkbox
            - columnheader "Program Name " [ref=f1e35] [cursor=pointer]:
              - text: Program Name
              - generic [ref=f1e36]: 
            - columnheader "Program Description " [ref=f1e38] [cursor=pointer]:
              - text: Program Description
              - generic [ref=f1e39]: 
            - columnheader "Program Status " [ref=f1e41] [cursor=pointer]:
              - text: Program Status
              - generic [ref=f1e42]: 
            - columnheader "Edit / Delete" [ref=f1e44]
        - rowgroup
      - generic [ref=f1e46]:
        - generic [ref=f1e47] [cursor=pointer]: Showing 0 to 0 of 0 entries
        - button "" [disabled]
        - button "" [disabled]
        - button "1" [ref=f1e49] [cursor=pointer]
        - button "" [disabled]
        - button "" [disabled]
      - generic [ref=f1e50]: In total there are 0 programs.
```

# Test source

```ts
  428 | });
  429 | 
  430 | Given('Admin is in program page where Program status are sorted in ascending order', async ({programFixture}) => {
  431 |   await programFixture.navigate();
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
> 528 |   expect(rowCount).toBeGreaterThan(0);
      |                    ^ Error: expect(received).toBeGreaterThan(expected)
  529 | });
  530 | 
  531 | Given('Admin is on any page except the last page of Program table', async ({ programFixture }) => {
  532 |   await programFixture.navigateToProgram();
  533 |   const isLastDisabled = await programFixture.isLastPageDisabled();
  534 |   if (!isLastDisabled) {
  535 |     await programFixture.clickLastPage();
  536 |     await programFixture.clickPrevPage();
  537 |   }
  538 | });
  539 | 
  540 | Given('Admin is on the Program table on any page except the first page', async ({ programFixture }) => {
  541 |   await programFixture.navigateToProgram();
  542 |   await programFixture.clickNextPage();
  543 | });
  544 | 
  545 | Given('Admin is on any page except the first page of Program table', async ({ programFixture }) => {
  546 |   await programFixture.navigateToProgram();
  547 |   await programFixture.clickNextPage();
  548 | });
  549 | 
  550 | When('Admin clicks the next page option \\(>\\) in the pagination control', async ({ programFixture }) => {
  551 |   firstRowBefore = await programFixture.getFirstRowProgramName();
  552 |   await programFixture.clickNextPage();
  553 | });
  554 | 
  555 | When('Admin clicks the last page option \\(>>\\) in the pagination control', async ({ programFixture }) => {
  556 |   firstRowBefore = await programFixture.getFirstRowProgramName();
  557 |   await programFixture.clickLastPage();
  558 | });
  559 | 
  560 | When('Admin clicks the previous page option \\(<\\) in the pagination control', async ({ programFixture }) => {
  561 |   firstRowBefore = await programFixture.getFirstRowProgramName();
  562 |   await programFixture.clickPrevPage();
  563 | });
  564 | 
  565 | When('Admin clicks the first page option \\(<<\\) in the pagination control', async ({ programFixture }) => {
  566 |   firstRowBefore = await programFixture.getFirstRowProgramName();
  567 |   await programFixture.clickFirstPage();
  568 | });
  569 | 
  570 | When('Admin clicks {string} on the navigation bar', async ({ programFixture }, navItem) => {
  571 |   await programFixture.clickProgramNavBar();
  572 | });
  573 | 
  574 | Then('Admin should navigate to the next page and see the next set of program records', async ({ programFixture }) => {
  575 |   const firstRowAfter = await programFixture.getFirstRowProgramName();
  576 |   expect(firstRowAfter).not.toBe(firstRowBefore);
  577 |   const paginationText = await programFixture.getPaginationText();
  578 |   expect(paginationText).toContain('Showing');
  579 | });
  580 | 
  581 | Then('Admin should see the last page record on the table', async ({ programFixture }) => {
  582 |   const isLastDisabled = await programFixture.isLastPageDisabled();
  583 |   expect(isLastDisabled).toBe(true);
  584 |   const paginationText = await programFixture.getPaginationText();
  585 |   expect(paginationText).toContain('Showing');
  586 | });
  587 | 
  588 | Then('Admin should see the previous page record on the table', async ({ programFixture }) => {
  589 |   const firstRowAfter = await programFixture.getFirstRowProgramName();
  590 |   expect(firstRowAfter).not.toBe(firstRowBefore);
  591 |   const paginationText = await programFixture.getPaginationText();
  592 |   expect(paginationText).toContain('Showing');
  593 | });
  594 | 
  595 | Then('Admin should see the very first page record on the table', async ({ programFixture }) => {
  596 |   const paginationText = await programFixture.getPaginationText();
  597 |   expect(paginationText).toContain('Showing 1 to');
  598 | });
  599 | 
  600 | Then('{string} should be displayed', async ({ programFixture }, expectedText) => {
  601 |   const paginationText = await programFixture.getPaginationText();
  602 |   expect(paginationText).toContain(expectedText);
  603 | });
  604 | 
  605 | Then('Admin should see pagination icons disabled', async ({ programFixture }) => {
  606 |   const allDisabled = await programFixture.areAllPaginationButtonsDisabled();
  607 |   expect(allDisabled).toBe(true);
  608 | });
  609 | 
  610 | 
```