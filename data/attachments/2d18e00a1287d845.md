# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/04_batch.feature.spec.js >> Batch Page UI >> Cancel batch deletion on batch page
- Location: .features-gen/features/04_batch.feature.spec.js:123:3

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('div').filter({ hasText: /^Confirm$/ })
Expected: not visible
Received: visible
Timeout:  5000ms

Call log:
  - Expect "not toBeVisible" with timeout 5000ms
  - waiting for locator('div').filter({ hasText: /^Confirm$/ })
    14 × locator resolved to <div class="p-dialog-header ng-tns-c118-6 ng-star-inserted">…</div>
       - unexpected value "visible"

```

```yaml
- text: Confirm
- button ""
```

# Test source

```ts
  269 | });
  270 | 
  271 | Then('Admin should see batch details dialog box closed without creating new batch', async ({batchFixture}) => {
  272 |     await expect(batchFixture.batchDetailsDialog).not.toBeVisible();
  273 | });
  274 | 
  275 | When('Admin clicks on edit icon on any row of the batch table', async ({batchFixture}) => {
  276 |     const randomNumber = Math.floor(Math.random() * 5) + 1;
  277 |     console.log(randomNumber);
  278 |     batchFixture.getEditButtonForRow(randomNumber).click();
  279 | });
  280 | 
  281 | Then('Admin should see details on batch details dialog box', async ({batchFixture}, dataTable) => {
  282 |     for(const [row] of dataTable.rows()) {
  283 |         const detail = row.trim();
  284 |         switch (detail) {
  285 |             case 'batch details':
  286 |                 await expect(batchFixture.batchDetailsDialog).toBeVisible();
  287 |                 break;
  288 |             case 'batch name value field is disabled for editing':
  289 |                 await expect(batchFixture.batchNameBox).toBeDisabled();
  290 |                 break;
  291 |             default:
  292 |                 throw new Error(`Unknown detail ${detail}`);
  293 |         }
  294 |     }
  295 | });
  296 | 
  297 | When('Admin updates any fields with {string} on batch details dialog box using {string}', async ({batchFixture}, details, testDataKey) => {
  298 |     const batchData = testData.batches[testDataKey];
  299 |     logger.info(`Update batch data with ${testDataKey}`);
  300 | 
  301 |     if(details === 'invalid data and click save button') {
  302 |         const randomNumber = Math.floor(Math.random() * 5) + 1;
  303 |         console.log(randomNumber);
  304 |         batchFixture.getEditButtonForRow(randomNumber).click();
  305 |         await (batchFixture.descriptionTextBox).fill(batchData.batchDescription);
  306 |         await batchFixture.clickSaveButton();
  307 |     }
  308 |     else if(details === 'valid data and click save button') {
  309 |         const randomNumber = Math.floor(Math.random() * 5) + 1;
  310 |         console.log(randomNumber);
  311 |         batchFixture.getEditButtonForRow(randomNumber).click();
  312 |         await (batchFixture.descriptionTextBox).fill(batchData.batchDescription);
  313 |         await (batchFixture.noOfClassesInputBox).fill(batchData.noOfClasses);
  314 |         await batchFixture.clickSaveButton();
  315 |     }
  316 |     else if(details === 'valid data and click cancel button') {
  317 |         const randomNumber = Math.floor(Math.random() * 5) + 1;
  318 |         console.log(randomNumber);
  319 |         batchFixture.getEditButtonForRow(randomNumber).click();
  320 |         await (batchFixture.descriptionTextBox).fill(batchData.batchDescription);
  321 |         await (batchFixture.noOfClassesInputBox).fill(batchData.noOfClasses);
  322 |         await batchFixture.clickCancelButton();
  323 |     }
  324 | });
  325 | 
  326 | Then('Admin should get {string} on batch page', async ({batchFixture}, popup) => {
  327 |     if(popup === 'Error msg under respective field') {
  328 |         await expect(batchFixture.failPopup).toBeVisible();
  329 |     }
  330 |     else if(popup === 'Successful msg for editing batch') {
  331 |         await expect(batchFixture.successPopup).toBeVisible();
  332 |     }
  333 |     else if(popup === 'batch details popup closes without editing batch') {
  334 |         await expect(batchFixture.batchDetailsDialog).not.toBeVisible();
  335 |     }
  336 | });
  337 | 
  338 | When('Admin clicks on delete icon on any row of the batch table', async ({batchFixture}) => {
  339 |     const randomNumber = Math.floor(Math.random() * 5) + 1;
  340 |     console.log(randomNumber);
  341 |     batchFixture.getDeleteButtonForRow(randomNumber).click();
  342 | });
  343 | 
  344 | Then('Admin should see the confirm alert box with yes and no button on batch page', async ({batchFixture}) => {
  345 |     await expect(batchFixture.confirmAlertBoxForDelete).toBeVisible();
  346 |     await expect(batchFixture.yesButtonForDelete).toBeVisible();
  347 |     await expect(batchFixture.noButtonForDelete).toBeVisible();
  348 | });
  349 | 
  350 | When('Admin clicks yes button after clicking delete icon', async ({batchFixture}) => {
  351 |     const randomNumber = Math.floor(Math.random() * 5) + 1;
  352 |     console.log(randomNumber);
  353 |     batchFixture.getDeleteButtonForRow(randomNumber).click();
  354 |     await (batchFixture.yesButtonForDelete).click();
  355 | });
  356 | 
  357 | Then('Admin should see the successful message and the batch should be deleted', async ({batchFixture}) => {
  358 |     await expect(batchFixture.successPopup).toBeVisible();
  359 | });
  360 | 
  361 | When('Admin clicks  no button after clicking delete icon', async ({batchFixture}) => {
  362 |     const randomNumber = Math.floor(Math.random() * 5) + 1;
  363 |     console.log(randomNumber);
  364 |     batchFixture.getDeleteButtonForRow(randomNumber).click();
  365 |     await (batchFixture.noButtonForDelete).click();
  366 | });
  367 | 
  368 | Then('Admin should see the alert box closed and the batch is not deleted', async ({batchFixture}) => {
> 369 |     await expect(batchFixture.confirmAlertBoxForDelete).not.toBeVisible();
      |                                                             ^ Error: expect(locator).not.toBeVisible() failed
  370 | });
  371 | 
  372 | When('Admin clicks on the close icon on confirm alert box', async ({batchFixture}) => {
  373 |     const randomNumber = Math.floor(Math.random() * 5) + 1;
  374 |     console.log(randomNumber);
  375 |     batchFixture.getDeleteButtonForRow(randomNumber).click();
  376 |     await (batchFixture.closeButtonForDelete).click();
  377 | });
  378 | 
  379 | Then('Admin should see the alert box closed and see batch page', async ({batchFixture}) => {
  380 |     await expect(batchFixture.confirmAlertBoxForDelete).not.toBeVisible();
  381 | });
  382 | 
  383 | When('Admin selects more than one batch by clicking on the checkbox', async ({Page,batchFixture}) => {
  384 |     //await Page.pause();
  385 |     const noOfCheckboxes = 3;
  386 |     const totalRows = await batchFixture.batchTableRows.count();
  387 | 
  388 |     if (totalRows < noOfCheckboxes) {
  389 |         throw new Error(`Not enough rows. Found ${totalRows}, but need ${noOfCheckboxes}.`);
  390 |     }
  391 |     const selectedRows = new Set();
  392 |     
  393 | 
  394 |     while(selectedRows.size < noOfCheckboxes) {
  395 |         const randomIndex = Math.floor(Math.random() * totalRows);
  396 |         selectedRows.add(randomIndex);
  397 |     }
  398 | 
  399 |     for(const rowIndex of selectedRows) {
  400 |         logger.info(`Selecting rows: ${rowIndex}`);
  401 |         await batchFixture.getCheckboxForRow(rowIndex).click();
  402 |     }
  403 | });
  404 | 
  405 | Then('Admin should see the Multiple delete box enabled under manage batch', async ({batchFixture}) => {
  406 |     await expect(batchFixture.deleteIcon).toBeEnabled();
  407 | });
  408 | 
  409 | When('Admin clicks on the delete button on the left top of the batch page', async ({batchFixture}) => {
  410 |     await (batchFixture.deleteIcon).click();
  411 | });
  412 | 
  413 | Then('Admin lands on Confirmation box with yes or no to delete batch', async ({batchFixture}) => {
  414 |     await expect(batchFixture.confirmAlertBoxForDelete).toBeVisible();
  415 |     await expect(batchFixture.yesButtonForDelete).toBeVisible();
  416 |     await expect(batchFixture.noButtonForDelete).toBeVisible();
  417 |     await expect(batchFixture.closeButtonForDelete).toBeVisible();    
  418 | });
  419 | 
  420 | // Batch Name sorting
  421 | When('Admin clicks on Arrow next to batch name', async ({batchFixture}) => {
  422 |   await batchFixture.clickBatchNameArrow();
  423 | });
  424 | 
  425 | Then('Admin should see the Batch Name is sorted in Ascending order', async ({batchFixture}) => {
  426 |   const names = await batchFixture.getBatchNames();
  427 |   expect(names.length).toBeGreaterThan(0);
  428 |   expect(names.every(n => n.length > 0)).toBe(true);
  429 |   expect(batchFixture.isSortedAscending(names)).toBe(true);
  430 | });
  431 | 
  432 | Given('Admin is in batch page where Batch names are sorted in ascending order', async ({batchFixture}) => {
  433 |   await batchFixture.navigate();
  434 |   await batchFixture.clickBatchNameArrow();
  435 |   const sortedNames = await batchFixture.getBatchNames();
  436 |   expect(batchFixture.isSortedAscending(sortedNames)).toBe(true);
  437 | });
  438 | 
  439 | Then('Admin should see the Batch Name is sorted in Descending order', async ({batchFixture}) => {
  440 |   const names = await batchFixture.getBatchNames();
  441 |   expect(names.length).toBeGreaterThan(0);
  442 |   expect(names.every(n => n.length > 0)).toBe(true);
  443 |   expect(batchFixture.isSortedDescending(names)).toBe(true);
  444 | });
  445 | 
  446 | // Batch Description sorting
  447 | When('Admin clicks on Arrow next to batch description', async ({batchFixture}) => {
  448 |   await batchFixture.clickBatchDescriptionArrow();
  449 | });
  450 | 
  451 | Then('Admin should see the Batch Description is sorted in Ascending order', async ({batchFixture}) => {
  452 |   const descriptions = await batchFixture.getBatchDescriptions();
  453 |   expect(descriptions.length).toBeGreaterThan(0);
  454 |   expect(batchFixture.isSortedAscending(descriptions)).toBe(true);
  455 | });
  456 | 
  457 | Given('Admin is in batch page where Batch descriptions are sorted in ascending order', async ({batchFixture}) => {
  458 |   await batchFixture.navigate();
  459 |   await batchFixture.clickBatchDescriptionArrow();
  460 |   const sortedDescriptions = await batchFixture.getBatchDescriptions();
  461 |   expect(batchFixture.isSortedAscending(sortedDescriptions)).toBe(true);
  462 | });
  463 | 
  464 | Then('Admin should see the Batch Description is sorted in Descending order', async ({batchFixture}) => {
  465 |   const descriptions = await batchFixture.getBatchDescriptions();
  466 |   expect(descriptions.length).toBeGreaterThan(0);
  467 |   expect(batchFixture.isSortedDescending(descriptions)).toBe(true);
  468 | });
  469 | 
```