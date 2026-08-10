# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/04_batch.feature.spec.js >> Batch Page UI >> Sorting of Batch Name in Descending order
- Location: .features-gen/features/04_batch.feature.spec.js:145:3

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
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
      - generic [ref=e15]: Manage Batch
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
            - columnheader "Batch Name " [active] [ref=e35] [cursor=pointer]:
              - text: Batch Name
              - generic [ref=e36]: 
            - columnheader "Batch Description " [ref=e38] [cursor=pointer]:
              - text: Batch Description
              - generic [ref=e39]: 
            - columnheader "Batch Status " [ref=e41] [cursor=pointer]:
              - text: Batch Status
              - generic [ref=e42]: 
            - columnheader "No Of Classes " [ref=e44] [cursor=pointer]:
              - text: No Of Classes
              - generic [ref=e45]: 
            - columnheader "Program Name " [ref=e47] [cursor=pointer]:
              - text: Program Name
              - generic [ref=e48]: 
            - columnheader "Edit / Delete" [ref=e50]
        - rowgroup
      - generic [ref=e52]:
        - generic [ref=e53] [cursor=pointer]: Showing 0 to 0 of 0 entries
        - button "" [disabled]
        - button "" [disabled]
        - button "1" [ref=e55] [cursor=pointer]
        - button "" [disabled]
        - button "" [disabled]
      - generic [ref=e56]: In total there are 0 batches.
```

# Test source

```ts
  292 | 
  293 | Then('Admin should see the confirm alert box with yes and no button on batch page', async ({batchFixture}) => {
  294 |     await expect(batchFixture.confirmAlertBoxForDelete).toBeVisible();
  295 |     await expect(batchFixture.yesButtonForDelete).toBeVisible();
  296 |     await expect(batchFixture.noButtonForDelete).toBeVisible();
  297 | });
  298 | 
  299 | When('Admin clicks yes button after clicking delete icon', async ({batchFixture}) => {
  300 |     const randomNumber = Math.floor(Math.random() * 5) + 1;
  301 |     console.log(randomNumber);
  302 |     batchFixture.getDeleteButtonForRow(randomNumber).click();
  303 |     await (batchFixture.yesButtonForDelete).click();
  304 | });
  305 | 
  306 | Then('Admin should see the successful message and the batch should be deleted', async ({batchFixture}) => {
  307 |     await expect(batchFixture.successPopup).toBeVisible();
  308 | });
  309 | 
  310 | When('Admin clicks  no button after clicking delete icon', async ({batchFixture}) => {
  311 |     const randomNumber = Math.floor(Math.random() * 5) + 1;
  312 |     console.log(randomNumber);
  313 |     batchFixture.getDeleteButtonForRow(randomNumber).click();
  314 |     await (batchFixture.noButtonForDelete).click();
  315 | });
  316 | 
  317 | Then('Admin should see the alert box closed and the batch is not deleted', async ({batchFixture}) => {
  318 |     await expect(batchFixture.confirmAlertBoxForDelete).not.toBeVisible();
  319 | });
  320 | 
  321 | When('Admin clicks on the close icon on confirm alert box', async ({batchFixture}) => {
  322 |     const randomNumber = Math.floor(Math.random() * 5) + 1;
  323 |     console.log(randomNumber);
  324 |     batchFixture.getDeleteButtonForRow(randomNumber).click();
  325 |     await (batchFixture.closeButtonForDelete).click();
  326 | });
  327 | 
  328 | Then('Admin should see the alert box closed and see batch page', async ({batchFixture}) => {
  329 |     await expect(batchFixture.confirmAlertBoxForDelete).not.toBeVisible();
  330 | });
  331 | 
  332 | When('Admin selects more than one batch by clicking on the checkbox', async ({Page,batchFixture}) => {
  333 |     //await Page.pause();
  334 |     const noOfCheckboxes = 3;
  335 |     const totalRows = await batchFixture.batchTableRows.count();
  336 | 
  337 |     if (totalRows < noOfCheckboxes) {
  338 |         throw new Error(`Not enough rows. Found ${totalRows}, but need ${noOfCheckboxes}.`);
  339 |     }
  340 |     const selectedRows = new Set();
  341 |     
  342 | 
  343 |     while(selectedRows.size < noOfCheckboxes) {
  344 |         const randomIndex = Math.floor(Math.random() * totalRows);
  345 |         selectedRows.add(randomIndex);
  346 |     }
  347 | 
  348 |     for(const rowIndex of selectedRows) {
  349 |         logger.info(`Selecting rows: ${rowIndex}`);
  350 |         await batchFixture.getCheckboxForRow(rowIndex).click();
  351 |     }
  352 | });
  353 | 
  354 | Then('Admin should see the Multiple delete box enabled under manage batch', async ({batchFixture}) => {
  355 |     await expect(batchFixture.deleteIcon).toBeEnabled();
  356 | });
  357 | 
  358 | When('Admin clicks on the delete button on the left top of the batch page', async ({batchFixture}) => {
  359 |     await (batchFixture.deleteIcon).click();
  360 | });
  361 | 
  362 | Then('Admin lands on Confirmation box with yes or no to delete batch', async ({batchFixture}) => {
  363 |     await expect(batchFixture.confirmAlertBoxForDelete).toBeVisible();
  364 |     await expect(batchFixture.yesButtonForDelete).toBeVisible();
  365 |     await expect(batchFixture.noButtonForDelete).toBeVisible();
  366 |     await expect(batchFixture.closeButtonForDelete).toBeVisible();    
  367 | });
  368 | 
  369 | // Batch Name sorting
  370 | When('Admin clicks on Arrow next to batch name', async ({batchFixture}) => {
  371 |   await batchFixture.clickBatchNameArrow();
  372 | });
  373 | 
  374 | Then('Admin should see the Batch Name is sorted in Ascending order', async ({batchFixture}) => {
  375 |   const names = await batchFixture.getBatchNames();
  376 |   expect(names.length).toBeGreaterThan(0);
  377 |   expect(names.every(n => n.length > 0)).toBe(true);
  378 |   expect(batchFixture.isSortedAscending(names)).toBe(true);
  379 | });
  380 | 
  381 | Given('Admin is in batch page where Batch names are sorted in ascending order', async ({batchFixture}) => {
  382 |   const names = await batchFixture.getBatchNames();
  383 |   if (!batchFixture.isSortedAscending(names)) {
  384 |     await batchFixture.clickBatchNameArrow();
  385 |   }
  386 |   const sortedNames = await batchFixture.getBatchNames();
  387 |   expect(batchFixture.isSortedAscending(sortedNames)).toBe(true);
  388 | });
  389 | 
  390 | Then('Admin should see the Batch Name is sorted in Descending order', async ({batchFixture}) => {
  391 |   const names = await batchFixture.getBatchNames();
> 392 |   expect(names.length).toBeGreaterThan(0);
      |                        ^ Error: expect(received).toBeGreaterThan(expected)
  393 |   expect(names.every(n => n.length > 0)).toBe(true);
  394 |   expect(batchFixture.isSortedDescending(names)).toBe(true);
  395 | });
  396 | 
  397 | // Batch Description sorting
  398 | When('Admin clicks on Arrow next to batch description', async ({batchFixture}) => {
  399 |   await batchFixture.clickBatchDescriptionArrow();
  400 | });
  401 | 
  402 | Then('Admin should see the Batch Description is sorted in Ascending order', async ({batchFixture}) => {
  403 |   const descriptions = await batchFixture.getBatchDescriptions();
  404 |   expect(descriptions.length).toBeGreaterThan(0);
  405 |   expect(batchFixture.isSortedAscending(descriptions)).toBe(true);
  406 | });
  407 | 
  408 | Given('Admin is in batch page where Batch descriptions are sorted in ascending order', async ({batchFixture}) => {
  409 |   const descriptions = await batchFixture.getBatchDescriptions();
  410 |   if (!batchFixture.isSortedAscending(descriptions)) {
  411 |     await batchFixture.clickBatchDescriptionArrow();
  412 |   }
  413 |   const sortedDescriptions = await batchFixture.getBatchDescriptions();
  414 |   expect(batchFixture.isSortedAscending(sortedDescriptions)).toBe(true);
  415 | });
  416 | 
  417 | Then('Admin should see the Batch Description is sorted in Descending order', async ({batchFixture}) => {
  418 |   const descriptions = await batchFixture.getBatchDescriptions();
  419 |   expect(descriptions.length).toBeGreaterThan(0);
  420 |   expect(batchFixture.isSortedDescending(descriptions)).toBe(true);
  421 | });
  422 | 
  423 | // Number of Classes sorting
  424 | When('Admin clicks on Arrow next to number of classes', async ({batchFixture}) => {
  425 |   await batchFixture.clickNoOfClassesArrow();
  426 | });
  427 | 
  428 | Then('Admin should see the Number of Classes is sorted in Ascending order', async ({batchFixture}) => {
  429 |   const classes = await batchFixture.getNoOfClasses();
  430 |   expect(classes.length).toBeGreaterThan(0);
  431 |   expect(batchFixture.isSortedAscendingNumeric(classes)).toBe(true);
  432 | });
  433 | 
  434 | Given('Admin is in batch page where Number of classes are sorted in ascending order', async ({batchFixture}) => {
  435 |   const classes = await batchFixture.getNoOfClasses();
  436 |   if (!batchFixture.isSortedAscendingNumeric(classes)) {
  437 |     await batchFixture.clickNoOfClassesArrow();
  438 |   }
  439 |   const sortedClasses = await batchFixture.getNoOfClasses();
  440 |   expect(batchFixture.isSortedAscendingNumeric(sortedClasses)).toBe(true);
  441 | });
  442 | 
  443 | Then('Admin should see the Number of Classes is sorted in Descending order', async ({batchFixture}) => {
  444 |   const classes = await batchFixture.getNoOfClasses();
  445 |   expect(classes.length).toBeGreaterThan(0);
  446 |   expect(batchFixture.isSortedDescendingNumeric(classes)).toBe(true);
  447 | });
  448 | 
  449 | // Batch Status sorting
  450 | When('Admin clicks on Arrow next to batch status', async ({batchFixture}) => {
  451 |   await batchFixture.clickBatchStatusArrow();
  452 | });
  453 | 
  454 | Then('Admin should see the Batch Status is sorted in Ascending order', async ({batchFixture}) => {
  455 |   const statuses = await batchFixture.getBatchStatuses();
  456 |   expect(statuses.length).toBeGreaterThan(0);
  457 |   expect(statuses.every(s => s.length > 0)).toBe(true);
  458 |   expect(batchFixture.isSortedAscending(statuses)).toBe(true);
  459 | });
  460 | 
  461 | Given('Admin is in batch page where Batch status are sorted in ascending order', async ({batchFixture}) => {
  462 |   const statuses = await batchFixture.getBatchStatuses();
  463 |   if (!batchFixture.isSortedAscending(statuses)) {
  464 |     await batchFixture.clickBatchStatusArrow();
  465 |   }
  466 |   const sortedStatuses = await batchFixture.getBatchStatuses();
  467 |   expect(batchFixture.isSortedAscending(sortedStatuses)).toBe(true);
  468 | });
  469 | 
  470 | Then('Admin should see the Batch Status is sorted in Descending order', async ({batchFixture}) => {
  471 |   const statuses = await batchFixture.getBatchStatuses();
  472 |   expect(statuses.length).toBeGreaterThan(0);
  473 |   expect(statuses.every(s => s.length > 0)).toBe(true);
  474 |   expect(batchFixture.isSortedDescending(statuses)).toBe(true);
  475 | });
```