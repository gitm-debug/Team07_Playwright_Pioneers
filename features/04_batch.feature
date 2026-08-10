@batchPage @auth
Feature: Batch Page UI
Background:	Admin is logged in to LMS Portal
  Given Admin is on home page after login
  When Admin clicks Batch on the navigation bar

# ----------Batch page navigation ------------#
@navigateToBatchPage
Scenario: Admin navigates to Batch page
  Then Admin should be in the Manage Batch Page

# ---------- Menu bar --------------- #
@batchSubMenu
Scenario: Batch-sub menu displayed
  Then Admin should see the following sub-menu options
    | Sub-menu Options |
    | Add New Batch    |

#--------------Manage batch UI validation ---------#
@batchPageElements
Scenario: Different elements on Batch page are displayed 
 Then Admin should see the following elements on Batch page
   | Element Name         |
   | Manage Batch Page heading      |
   | Delete icon under the header   |
   | Pagination controls|
   | edit icon on each row|
   | delete icon on each row|
   | checkbox on each row|
   | datatable headers |
   | checkbox in datatable header row |
   | sort icon next to all datatable headers|

#----------- Add new batch UI validation -------------#
@BatchDetailsDialogBox
Scenario: Add New Batch dialog is displayed
  When Admin clicks on Add New batch under the batch menu bar
  Then Admin should see Batch Details dialog box

@batchDetailsFields
Scenario: Different fields are displayed under Batch Details dialog box
  When Admin clicks on Add New batch under the batch menu bar
  Then Admin should see the following fields under Batch Details dialog box
    | Field Name |
    | Batch Name |
    | Description |
    | Number of Classes |
    | program name with dropdown |
    | Status radio buttons |

#---------------- Add new batch functional validation --------------#
@programNameFieldValidation
Scenario: Program name appears as batch prefix
  When Admin clicks on Add New batch under the batch menu bar
  When Admin selects program name present in the dropdown
  Then Admin should see selected program name in the batch name prefix box

@batchNameSuffixValidation
Scenario: Batch name suffix accepts only numbers
  When Admin clicks on Add New batch under the batch menu bar
  When Admin enters alphabets in the batch name suffix box
  Then Admin should get error message below the text box of respective field

@batchNamePrefixValidation
Scenario: Batch name Prefix cannot be edited
  When Admin clicks on Add New batch under the batch menu bar
  When Admin enters alphabets in batch name prefix box
  Then Admin should see empty text box under the batch name prefix field

@batchDetailsMandatoryFieldsValidation
Scenario Outline: Add new batch only with "<data>"
  When Admin clicks on Add New batch under the batch menu bar
  When Admin enters the "<data>" to create new batch
  Then Admin should get a "<popup>" on batch page for "<data>"
  Examples: 
  | data                                    | popup                 |
  | data to mandatory fields and click save | successful message |
  | leaves blank one of the mandatory fields | error message on respective field |
  | valid data to all mandatory fields and click cancel | batch details popup closes without creating batch |

@batchDetailsCloseIcon
Scenario: Close icon functionality
  When Admin clicks on Add New batch under the batch menu bar
  When Admin clicks on close icon on the top right corner of the batch details dialog box
  Then Admin should see batch details dialog box closed without creating new batch

#-------------Edit batch validation-------------#
@editIconOnBatchPage
Scenario: Edit icon functionality on batch page
  When Admin clicks on edit icon on any row of the batch table
  Then Admin should see details on batch details dialog box
  | details |
  | batch details |
  | batch name value field is disabled for editing |

@editIconOnBatchPage
Scenario Outline: Validate editing description and No. of classes fields with "<details>" in the pop up
  When Admin clicks on edit icon on any row of the batch table
  When Admin updates any fields with "<details>" on batch details dialog box
  Then Admin should get "<popup>" on batch page
  Examples:
  | details | popup |
  | invalid data and click save button | Error msg under respective field |
  | valid data and click save button   | Successful msg for editing batch |
  | valid data and click cancel button | batch details popup closes without editing batch |

  # ---------------------Delete batch validation------------------------#
@displayDeleteConfirm
Scenario: Display Delete Confirmation
  When Admin clicks on delete icon on any row of the batch table
  Then Admin should see the confirm alert box with yes and no button on batch page

@deleteBatchSuccessfully
Scenario: Delete batch Successfully on batch page
  When Admin clicks on delete icon on any row of the batch table
  When Admin clicks yes button after clicking delete icon
  Then Admin should see the successful message and the batch should be deleted

@cancelBatch
Scenario: Cancel batch deletion on batch page
  When Admin clicks on delete icon on any row of the batch table
  When Admin clicks  no button after clicking delete icon
  Then Admin should see the alert box closed and the batch is not deleted

@closeIconDeleteBatch
Scenario: close icon functionality for delete batch
  When Admin clicks on delete icon on any row of the batch table
  When Admin clicks on the close icon on confirm alert box
  Then Admin should see the alert box closed and see batch page

  # ----------Delete multiple batches with checkbox----------------#
@deleteMultipleBatchValidation
Scenario: Select multiple batch on batch page
  When Admin selects more than one batch by clicking on the checkbox
  Then Admin should see the Multiple delete box enabled under manage batch 

@deleteMultipleBatchValidation
Scenario: Delete Multiple Batches on batch page
  When Admin selects more than one batch by clicking on the checkbox
  When Admin clicks on the delete button on the left top of the batch page
  Then Admin lands on Confirmation box with yes or no to delete batch

# ------------- Manage batch - sorting ---------------------- #
@sortBatchNameInAscending
Scenario: Sorting of Batch Name in Ascending order
  When Admin clicks on Arrow next to batch name
  Then Admin should see the Batch Name is sorted in Ascending order

@sortBatchNameInDescending
Scenario: Sorting of Batch Name in Descending order
  Given Admin is in batch page where Batch names are sorted in ascending order
  When Admin clicks on Arrow next to batch name
  Then Admin should see the Batch Name is sorted in Descending order

@sortBatchDescriptionInAscending
Scenario: Sorting of Batch Description in Ascending order
  When Admin clicks on Arrow next to batch description
  Then Admin should see the Batch Description is sorted in Ascending order

@sortBatchDescriptionInDescending
Scenario: Sorting of Batch Description in Descending order
  Given Admin is in batch page where Batch descriptions are sorted in ascending order
  When Admin clicks on Arrow next to batch description
  Then Admin should see the Batch Description is sorted in Descending order

@sortNoOfClassesInAscending
Scenario: Sorting of Number of classes in Ascending order
  When Admin clicks on Arrow next to number of classes
  Then Admin should see the Number of Classes is sorted in Ascending order

@sortNoOfClassesInDescending
Scenario: Sorting of Number of classes in Descending order
  Given Admin is in batch page where Number of classes are sorted in ascending order
  When Admin clicks on Arrow next to number of classes
  Then Admin should see the Number of Classes is sorted in Descending order

@sortBatchStatusInAscending
Scenario: Sorting of Batch status in Ascending order
  When Admin clicks on Arrow next to batch status
  Then Admin should see the Batch Status is sorted in Ascending order

@sortBatchStatusInDescending
Scenario: Sorting of Batch status in Descending order
  Given Admin is in batch page where Batch status are sorted in ascending order
  When Admin clicks on Arrow next to batch status
  Then Admin should see the Batch Status is sorted in Descending order

# ---------- Batch page - Pagination ---------------------- #
@batchPagination
Scenario: Next Page Navigation
  Given Admin is on batch page with multiple program records
  When Admin clicks the next page option (>) in the batch pagination control
  Then Admin should see the Next enabled link

@batchPagination
Scenario: Last Page Navigation
  Given Admin is on batch page except the last page of Program table
  When Admin clicks the last page option (>>) in the batch pagination control
  Then Admin should see the last page link with next page link disabled on the table

@batchPagination
Scenario: Previous Page Navigation
  Given Admin is on the batch table on any page except the first page
  When Admin clicks the previous page option (<) in the batch pagination control
  Then Admin should see the previous page on the table

@batchPagination
Scenario: First Page Navigation
  Given Admin is on any page except the first page of batch table
  When Admin clicks the first page option (<<) in the batch pagination control
  Then Admin should see the very first page on the data table

@batchPagination
Scenario: Previous page arrow disabled on first page
  Given Admin is on the batch page with multiple pages of batch record
  When Admin clicks first page link on the batch data table
  Then Admin should see the Previous arrow (<) disabled

@batchPagination
Scenario: First page arrow disabled on first page
  Given Admin is on the batch page with multiple pages of batch record
  When Admin clicks first page link on the batch data table
  Then Admin should see the First page arrow (<<) disabled

@batchPagination
Scenario: Next page arrow enabled on first page
  Given Admin is on the batch page with multiple pages of batch record
  When Admin clicks first page link on the batch data table
  Then Admin should see Next arrow (>) enabled

@batchPagination
Scenario: Last page arrow enabled on first page
  Given Admin is on the batch page with multiple pages of batch record
  When Admin clicks first page link on the batch data table
  Then Admin should see Last page arrow (>>) enabled