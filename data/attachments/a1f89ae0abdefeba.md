# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/04_batch.feature.spec.js >> Batch Page UI >> Next Page Navigation
- Location: .features-gen/features/04_batch.feature.spec.js:204:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: false
Received: true
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
      - generic [ref=f1e15]: Manage Batch
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
                  - checkbox
                - checkbox [ref=f1e35]
            - columnheader "Batch Name " [ref=f1e36] [cursor=pointer]:
              - text: Batch Name
              - generic [ref=f1e37]: 
            - columnheader "Batch Description " [ref=f1e39] [cursor=pointer]:
              - text: Batch Description
              - generic [ref=f1e40]: 
            - columnheader "Batch Status " [ref=f1e42] [cursor=pointer]:
              - text: Batch Status
              - generic [ref=f1e43]: 
            - columnheader "No Of Classes " [ref=f1e45] [cursor=pointer]:
              - text: No Of Classes
              - generic [ref=f1e46]: 
            - columnheader "Program Name " [ref=f1e48] [cursor=pointer]:
              - text: Program Name
              - generic [ref=f1e49]: 
            - columnheader "Edit / Delete" [ref=f1e51]
        - rowgroup [ref=f1e52]:
          - row [ref=f1e53]:
            - gridcell [ref=f1e54]:
              - generic [ref=f1e56] [cursor=pointer]:
                - generic [ref=f1e57]:
                  - checkbox
                - checkbox [ref=f1e58]
            - gridcell "TeamLMS_995" [ref=f1e59]
            - gridcell "Batch Description001" [ref=f1e60]
            - gridcell "Active" [ref=f1e61]
            - gridcell "4" [ref=f1e62]
            - gridcell "Updatedhbhbvz" [ref=f1e63]
            - gridcell [ref=f1e64]:
              - generic [ref=f1e65]:
                - button [ref=f1e67] [cursor=pointer]:
                  - generic [ref=f1e68]: 
                - button [ref=f1e70] [cursor=pointer]:
                  - generic [ref=f1e71]: 
          - row [ref=f1e72]:
            - gridcell [ref=f1e73]:
              - generic [ref=f1e75] [cursor=pointer]:
                - generic [ref=f1e76]:
                  - checkbox
                - checkbox [ref=f1e77]
            - gridcell "TeamLMS_996" [ref=f1e78]
            - gridcell "Batch Description001" [ref=f1e79]
            - gridcell "Active" [ref=f1e80]
            - gridcell "4" [ref=f1e81]
            - gridcell "Updatedhbhbvz" [ref=f1e82]
            - gridcell [ref=f1e83]:
              - generic [ref=f1e84]:
                - button [ref=f1e86] [cursor=pointer]:
                  - generic [ref=f1e87]: 
                - button [ref=f1e89] [cursor=pointer]:
                  - generic [ref=f1e90]: 
          - row [ref=f1e91]:
            - gridcell [ref=f1e92]:
              - generic [ref=f1e94] [cursor=pointer]:
                - generic [ref=f1e95]:
                  - checkbox
                - checkbox [ref=f1e96]
            - gridcell "TeamLMS_997" [ref=f1e97]
            - gridcell "Batch Description001" [ref=f1e98]
            - gridcell "Active" [ref=f1e99]
            - gridcell "4" [ref=f1e100]
            - gridcell "Updatedhbhbvz" [ref=f1e101]
            - gridcell [ref=f1e102]:
              - generic [ref=f1e103]:
                - button [ref=f1e105] [cursor=pointer]:
                  - generic [ref=f1e106]: 
                - button [ref=f1e108] [cursor=pointer]:
                  - generic [ref=f1e109]: 
          - row [ref=f1e110]:
            - gridcell [ref=f1e111]:
              - generic [ref=f1e113] [cursor=pointer]:
                - generic [ref=f1e114]:
                  - checkbox
                - checkbox [ref=f1e115]
            - gridcell "TeamLMS_999" [ref=f1e116]
            - gridcell "Batch Description001" [ref=f1e117]
            - gridcell "Active" [ref=f1e118]
            - gridcell "4" [ref=f1e119]
            - gridcell "Updatedhbhbvz" [ref=f1e120]
            - gridcell [ref=f1e121]:
              - generic [ref=f1e122]:
                - button [ref=f1e124] [cursor=pointer]:
                  - generic [ref=f1e125]: 
                - button [ref=f1e127] [cursor=pointer]:
                  - generic [ref=f1e128]: 
          - row [ref=f1e129]:
            - gridcell [ref=f1e130]:
              - generic [ref=f1e132] [cursor=pointer]:
                - generic [ref=f1e133]:
                  - checkbox
                - checkbox [ref=f1e134]
            - gridcell "Updatedcpvzv_66867" [ref=f1e135]
            - gridcell [ref=f1e136]
            - gridcell "Active" [ref=f1e137]
            - gridcell "2" [ref=f1e138]
            - gridcell "Updatedcpvzv" [ref=f1e139]
            - gridcell [ref=f1e140]:
              - generic [ref=f1e141]:
                - button [ref=f1e143] [cursor=pointer]:
                  - generic [ref=f1e144]: 
                - button [ref=f1e146] [cursor=pointer]:
                  - generic [ref=f1e147]: 
          - row [ref=f1e148]:
            - gridcell [ref=f1e149]:
              - generic [ref=f1e151] [cursor=pointer]:
                - generic [ref=f1e152]:
                  - checkbox
                - checkbox [ref=f1e153]
            - gridcell "Updatedjclfsh_0002" [ref=f1e154]
            - gridcell "Arrays and Loops" [ref=f1e155]
            - gridcell "Active" [ref=f1e156]
            - gridcell "7" [ref=f1e157]
            - gridcell "Updatedjclfsh" [ref=f1e158]
            - gridcell [ref=f1e159]:
              - generic [ref=f1e160]:
                - button [ref=f1e162] [cursor=pointer]:
                  - generic [ref=f1e163]: 
                - button [ref=f1e165] [cursor=pointer]:
                  - generic [ref=f1e166]: 
          - row [ref=f1e167]:
            - gridcell [ref=f1e168]:
              - generic [ref=f1e170] [cursor=pointer]:
                - generic [ref=f1e171]:
                  - checkbox
                - checkbox [ref=f1e172]
            - gridcell "Updatedjclfsh_0004" [ref=f1e173]
            - gridcell [ref=f1e174]
            - gridcell "Active" [ref=f1e175]
            - gridcell "5" [ref=f1e176]
            - gridcell "Updatedjclfsh" [ref=f1e177]
            - gridcell [ref=f1e178]:
              - generic [ref=f1e179]:
                - button [ref=f1e181] [cursor=pointer]:
                  - generic [ref=f1e182]: 
                - button [ref=f1e184] [cursor=pointer]:
                  - generic [ref=f1e185]: 
      - generic [ref=f1e187]:
        - generic [ref=f1e188] [cursor=pointer]: Showing 11 to 17 of 17 entries
        - button "" [ref=f1e189] [cursor=pointer]
        - button "" [ref=f1e191] [cursor=pointer]
        - generic [ref=f1e193]:
          - button "1" [ref=f1e194] [cursor=pointer]
          - button "2" [ref=f1e195] [cursor=pointer]
        - button "" [disabled]
        - button "" [disabled]
      - generic [ref=f1e196]: In total there are 17 batches.
```

# Test source

```ts
  543 | 
  544 |         await (batchFixture.searchBox).click();
  545 |         await Page.waitForTimeout(200);
  546 |         await (batchFixture.searchBox).clear();
  547 |         await (batchFixture.searchBox).fill(batchDescription);    
  548 |         await (batchFixture.searchBox).press('Enter');
  549 |     }
  550 | });
  551 | 
  552 | Then('Admin should see the filtered batch details based on the {string} in the data table', async ({batchFixture}, searchType) => {
  553 |     if(searchType === 'batchName') {
  554 |         const batch = globalStorage.getLastBatch();
  555 | 
  556 |         const batchNamePrefix = batch.programName;
  557 |         const batchnameSuffix = batch.batchNameSuffix;
  558 |         const status = batch.status;
  559 | 
  560 |         const actualResults = await batchFixture.verifyBatchInSerchBox(batchNamePrefix);
  561 |         //logger.info('Actual batch data: ' ,actualResults);
  562 |         logger.info(`Actual batch data: ${JSON.stringify(actualResults)}`);
  563 |         await expect(actualResults.batchName).toContain(batchNamePrefix);
  564 |     }
  565 |     else if(searchType === 'batchDescription') {
  566 |         const batch = globalStorage.getPreviousBatch();
  567 | 
  568 |         const batchNamePrefix = batch.programName;
  569 |         const batchnameSuffix = batch.batchNameSuffix;
  570 |         const batchDescription = batch.batchDescription;
  571 |         const status = batch.status;
  572 | 
  573 |         const actualResults = await batchFixture.verifyBatchInSerchBox(batchDescription);
  574 |         //logger.info('Actual batch data: ' ,actualResults);
  575 |         logger.info(`Actual batch data: ${JSON.stringify(actualResults)}`);
  576 |         await expect(actualResults.batchDescription).toContain(batchDescription);
  577 |     }
  578 | });
  579 | 
  580 | // Batch Pagination
  581 | let firstRowBefore;
  582 | 
  583 | Given('Admin is on batch page with multiple program records', async ({batchFixture}) => {
  584 |   await batchFixture.navigate();
  585 |   const rowCount = await batchFixture.getTableRowCount();
  586 |   expect(rowCount).toBeGreaterThan(0);
  587 | });
  588 | 
  589 | Given('Admin is on batch page except the last page of Program table', async ({batchFixture}) => {
  590 |   await batchFixture.navigate();
  591 |   const isLastDisabled = await batchFixture.isLastPageDisabled();
  592 |   if (!isLastDisabled) {
  593 |     await batchFixture.clickLastPage();
  594 |     await batchFixture.clickPrevPage();
  595 |   }
  596 | });
  597 | 
  598 | Given('Admin is on the batch table on any page except the first page', async ({batchFixture}) => {
  599 |   await batchFixture.navigate();
  600 |   await batchFixture.clickNextPage();
  601 | });
  602 | 
  603 | Given('Admin is on any page except the first page of batch table', async ({batchFixture}) => {
  604 |   await batchFixture.navigate();
  605 |   await batchFixture.clickNextPage();
  606 | });
  607 | 
  608 | Given('Admin is on the batch page with multiple pages of batch record', async ({batchFixture}) => {
  609 |   await batchFixture.navigate();
  610 |   const rowCount = await batchFixture.getTableRowCount();
  611 |   expect(rowCount).toBeGreaterThan(0);
  612 |   const isNextDisabled = await batchFixture.isNextPageDisabled();
  613 |   if (!isNextDisabled) {
  614 |     await batchFixture.clickNextPage();
  615 |   }
  616 | });
  617 | 
  618 | When('Admin clicks the next page option \\(>) in the batch pagination control', async ({batchFixture}) => {
  619 |   firstRowBefore = await batchFixture.batchTableRows.first().locator('td').nth(1).textContent();
  620 |   await batchFixture.clickNextPage();
  621 | });
  622 | 
  623 | When('Admin clicks the last page option \\(>>\\) in the batch pagination control', async ({batchFixture}) => {
  624 |   firstRowBefore = await batchFixture.batchTableRows.first().locator('td').nth(1).textContent();
  625 |   await batchFixture.clickLastPage();
  626 | });
  627 | 
  628 | When('Admin clicks the previous page option \\(<\\) in the batch pagination control', async ({batchFixture}) => {
  629 |   firstRowBefore = await batchFixture.batchTableRows.first().locator('td').nth(1).textContent();
  630 |   await batchFixture.clickPrevPage();
  631 | });
  632 | 
  633 | When('Admin clicks the first page option \\(<<\\) in the batch pagination control', async ({batchFixture}) => {
  634 |   await batchFixture.clickFirstPage();
  635 | });
  636 | 
  637 | When('Admin clicks first page link on the batch data table', async ({batchFixture}) => {
  638 |   await batchFixture.clickFirstPage();
  639 | });
  640 | 
  641 | Then('Admin should see the Next enabled link', async ({batchFixture}) => {
  642 |   const isDisabled = await batchFixture.isNextPageDisabled();
> 643 |   expect(isDisabled).toBe(false);
      |                      ^ Error: expect(received).toBe(expected) // Object.is equality
  644 | });
  645 | 
  646 | Then('Admin should see the last page link with next page link disabled on the table', async ({batchFixture}) => {
  647 |   const isNextDisabled = await batchFixture.isNextPageDisabled();
  648 |   expect(isNextDisabled).toBe(true);
  649 |   const isLastDisabled = await batchFixture.isLastPageDisabled();
  650 |   expect(isLastDisabled).toBe(true);
  651 | });
  652 | 
  653 | Then('Admin should see the previous page on the table', async ({batchFixture}) => {
  654 |   const firstRowAfter = await batchFixture.batchTableRows.first().locator('td').nth(1).textContent();
  655 |   expect(firstRowAfter).not.toBe(firstRowBefore);
  656 | });
  657 | 
  658 | Then('Admin should see the very first page on the data table', async ({batchFixture}) => {
  659 |   const isFirstDisabled = await batchFixture.isFirstPageDisabled();
  660 |   expect(isFirstDisabled).toBe(true);
  661 | });
  662 | 
  663 | Then('Admin should see the Previous arrow \\(<\\) disabled', async ({batchFixture}) => {
  664 |   const isDisabled = await batchFixture.isPrevPageDisabled();
  665 |   expect(isDisabled).toBe(true);
  666 | });
  667 | 
  668 | Then('Admin should see the First page arrow \\(<<\\) disabled', async ({batchFixture}) => {
  669 |   const isDisabled = await batchFixture.isFirstPageDisabled();
  670 |   expect(isDisabled).toBe(true);
  671 | });
  672 | 
  673 | Then('Admin should see Next arrow \\(>\\) enabled', async ({batchFixture}) => {
  674 |   const isDisabled = await batchFixture.isNextPageDisabled();
  675 |   expect(isDisabled).toBe(false);
  676 | });
  677 | 
  678 | Then('Admin should see Last page arrow \\(>>\\) enabled', async ({batchFixture}) => {
  679 |   const isDisabled = await batchFixture.isLastPageDisabled();
  680 |   expect(isDisabled).toBe(false);
  681 | });
```