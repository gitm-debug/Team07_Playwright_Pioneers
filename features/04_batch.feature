@batchPage @auth
Feature: Batch Page UI
Background:	Admin is logged in to LMS Portal
  Given Admin is on home page after login
  When Admin clicks Batch on the navigation bar

#----------Batch page navigation ------------#
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