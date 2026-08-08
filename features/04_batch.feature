@batchPage @auth
Feature: Batch Page UI
Background:	Admin is logged in to LMS Portal
  Given Admin is on home page after login

Rule: Manage Batch Page - UI validation
@navigateToBatchPage
Scenario: Admin navigates to Batch page
  When Admin clicks Batch on the navigation bar
  Then Admin should be in the Manage Batch Page

@batchSubMenu
Scenario: Batch-sub menu displayed
  When Admin clicks Batch on the navigation bar
  Then Admin should see the following sub-menu options
    | Sub-menu Options |
    | Add New Batch    |

@batchPageElements
Scenario: Different elements on Batch page are displayed 
 When Admin clicks Batch on the navigation bar
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

Rule: Add new batch - UI validation

Background: Admin navigates to Manage batch page after logged in
  Given Admin is on the batch page

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
