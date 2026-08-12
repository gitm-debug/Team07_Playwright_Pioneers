# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/03_program.feature.spec.js >> Program Page Verification >> Delete Multiple programs
- Location: .features-gen/features/03_program.feature.spec.js:261:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('table tbody .p-checkbox').first()

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
  531 |     // if (await row.count() === 0) {
  532 |     //   throw new Error(`Program "${programName}" was deleted but should NOT have been!`);
  533 |     // }
  534 |   }
  535 | 
  536 |   //  Verify program not deleted and page visible
  537 |   async verifyAlertBoxClosedAndProgramPageVisible() {
  538 |     await this.confirmAlertBoxForDelete.waitFor({ state: 'hidden', timeout: 5000 });
  539 |     const programName = await this.getProgramNameFromTable();
  540 |     if (programName) {
  541 |       await this.searchProgram(programName);
  542 |       const row = this.page.locator(`table tbody tr:has-text("${programName}")`);
  543 |       // if (await row.count() === 0) {
  544 |       //   throw new Error(`Program "${programName}" was deleted!`);
  545 |       // }
  546 |       // console.log(`Program "${programName}" still exists`);
  547 |     }
  548 | 
  549 |     const isVisible = await this.manageProgram.isVisible();
  550 |     // if (!isVisible) throw new Error('Program page not visible');
  551 | 
  552 |   }
  553 | 
  554 |   //------------------------------------------------------------------
  555 |   async navigate() {
  556 |     await this.page.goto('/program');
  557 |     await this.page.waitForLoadState('networkidle');
  558 |   }
  559 | 
  560 |   async clickProgramNameArrow() {
  561 |     await this.programNameHeader.click();
  562 |   }
  563 | 
  564 |   async clickProgramDescriptionArrow() {
  565 |     await this.page.keyboard.press('Escape');
  566 |     await this.page.waitForTimeout(300);
  567 |     await this.programDescriptionHeader.click();
  568 |   }
  569 | 
  570 |   async clickProgramStatusArrow() {
  571 |     await this.page.keyboard.press('Escape');
  572 |     await this.page.waitForTimeout(300);
  573 |     await this.programStatusHeader.click();
  574 |   }
  575 | 
  576 |   async getProgramNames() {
  577 |     return await this.page.$$eval('table tbody tr td:nth-child(2)', els =>
  578 |       els.map(el => el.textContent.trim())
  579 |     );
  580 |   }
  581 | 
  582 |   async getProgramDescriptions() {
  583 |     return await this.page.$$eval('table tbody tr td:nth-child(3)', els =>
  584 |       els.map(el => el.textContent.trim())
  585 |     );
  586 |   }
  587 | 
  588 |   async getProgramStatuses() {
  589 |     return await this.page.$$eval('table tbody tr td:nth-child(4)', els =>
  590 |       els.map(el => el.textContent.trim())
  591 |     );
  592 |   }
  593 | 
  594 |   isSortedAscending(arr) {
  595 |     for (let i = 0; i < arr.length - 1; i++) {
  596 |       if (arr[i].localeCompare(arr[i + 1]) > 0) return false;
  597 |     }
  598 |     return true;
  599 |   }
  600 | 
  601 |   isSortedDescending(arr) {
  602 |     for (let i = 0; i < arr.length - 1; i++) {
  603 |       if (arr[i].localeCompare(arr[i + 1]) < 0) return false;
  604 |     }
  605 |     return true;
  606 |   }
  607 | 
  608 | //Delete multiple
  609 | async selectMultipleRows(indices) {
  610 |     await this.page.keyboard.press('Escape');
  611 |     await this.page.locator('.cdk-overlay-backdrop').waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
  612 |     await this.page.waitForTimeout(500);
  613 |     for (const index of indices) {
> 614 |       await this.rowCheckboxes.nth(index).click();
      |                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  615 |       await this.page.waitForTimeout(300);
  616 |     }
  617 |   }
  618 | 
  619 |   async getSelectedRowCount() {
  620 |     return await this.rowCheckboxes.locator('.p-checkbox-icon').count();
  621 |   }
  622 | 
  623 |   async isTableVisible() {
  624 |     return await this.page.locator('table').isVisible();
  625 |   }
  626 | 
  627 | async isDeleteButtonEnabled() {
  628 |     logger.step('Checking if delete button is enabled');
  629 |     const btn = this.page.locator('button').filter({ hasText: /delete/i }).first();
  630 |     if (await btn.count() === 0) {
  631 |       const iconBtn = this.page.locator('button .pi-trash').locator('..');
  632 |       return !(await iconBtn.first().isDisabled());
  633 |     }
  634 |     return !(await btn.isDisabled());
  635 |   }
  636 | 
  637 |   async clickDeleteButton() {
  638 |     logger.step('Clicking delete button');
  639 |     const btn = this.page.locator('button').filter({ hasText: /delete/i }).first();
  640 |     if (await btn.count() === 0) {
  641 |       const iconBtn = this.page.locator('button .pi-trash').locator('..');
  642 |       await iconBtn.first().click();
  643 |     } else {
  644 |       await btn.click();
  645 |     }
  646 |     await this.page.waitForTimeout(1000);
  647 |   }
  648 | 
  649 |   // Confirmation dialog
  650 |   async isConfirmDialogVisible() {
  651 |     logger.step('Checking if confirmation dialog is visible');
  652 |     return await this.confirmDialog.isVisible();
  653 |   }
  654 | 
  655 |   async clickYesButton() {
  656 |     logger.step('Clicking Yes button on confirmation dialog');
  657 |     await this.confirmYesBtn.click();
  658 |     await this.page.waitForTimeout(2000);
  659 |   }
  660 | 
  661 |   async clickNoButton() {
  662 |     logger.step('Clicking No button on confirmation dialog');
  663 |     await this.confirmNoBtn.click();
  664 |     await this.page.waitForTimeout(1000);
  665 |   }
  666 | 
  667 |   async clickCloseButton() {
  668 |     logger.step('Clicking close (X) button on confirmation dialog');
  669 |     await this.confirmCloseBtn.click();
  670 |     await this.page.waitForTimeout(1000);
  671 |   }
  672 | 
  673 |   async getConfirmMessage() {
  674 |     return await this.confirmMessage.textContent();
  675 |   }
  676 | 
  677 |   // Toast / Success message
  678 |   async getToastMessage() {
  679 |     logger.step('Getting toast message');
  680 |     await this.page.waitForSelector('.p-toast-message', { timeout: 5000 });
  681 |     return await this.toastText.textContent();
  682 |   }
  683 | 
  684 |   async isToastVisible() {
  685 |     return await this.toastMessage.isVisible();
  686 |   }
  687 | 
  688 |  ///Pagination
  689 | 
  690 |   async navigateToProgram() {
  691 |     await this.page.goto('/program');
  692 |     await this.page.waitForLoadState('networkidle');
  693 |   }
  694 | 
  695 |   async clickNextPage() {
  696 |     await this.nextBtn.click();
  697 |     await this.page.waitForTimeout(1000);
  698 |   }
  699 | 
  700 |   async clickLastPage() {
  701 |     await this.lastBtn.click();
  702 |     await this.page.waitForTimeout(1000);
  703 |   }
  704 | 
  705 |   async clickPrevPage() {
  706 |     await this.prevBtn.click();
  707 |     await this.page.waitForTimeout(1000);
  708 |   }
  709 | 
  710 |   async clickFirstPage() {
  711 |     await this.firstBtn.click();
  712 |     await this.page.waitForTimeout(1000);
  713 |   }
  714 | 
```