@batchPage @auth
Feature: Batch Page UI
Background:	Admin is logged in to LMS Portal
  Given Admin is on home page after login

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
  