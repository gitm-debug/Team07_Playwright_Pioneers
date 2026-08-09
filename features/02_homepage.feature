@auth
Feature: Home Page - UI Validation

Background: Admin is logged in to LMS Portal
Given Admin is on home page after login


Scenario: Verify title of the LMS
Then Admin should see the page title " LMS - Learning Management System "

Scenario: Verify LMS title alignment
Then Admin should see the LMS title at the top left corner of the page


Scenario: Verify navigation bar
  Then Admin should see the navigation bar at the top right corner
  And Admin should see the following navigation menu items in order
    | Home    |
    | Program |
    | Batch   |
    | Logout  |


Scenario: Verify welcome message
Then Admin should see the welcome message with user name and role


Scenario: Verify bar chart presence
Then Admin should see the Active and Inactive Users bar chart


Scenario: Verify user status bar chart 
Then Admin should see the user status bar chart
And the chart should display the legends "Active" and "Undefined"


Scenario Outline: Verify user status chart legends
  When Admin clicks the "<Legend>" legend
  Then the <Legend> bar should be striked
Examples:
  | Legend    |
  | Active    |
  | Undefined |

Scenario: Verify User count card
  Then Admin should see the User count card
  And the User count should be displayed
  And the User icon should be displayed

#Scenario: Verify User count card navigation
#When Admin clicks the User count card
#Then Admin should be redirected to the Manage User page


Scenario: Verify Staff count card
Then Admin should see the Staff count card

Scenario: Verify Batches count card
  Then Admin should see the Batches count card
  And the Batch count should be displayed
  And the Batch icon should be displayed

#Scenario: Verify Batches count card navigation
#When Admin clicks the Batches count card
#Then Admin should be redirected to the Manage Batch page


Scenario: Verify Programs count card
  Then Admin should see the Programs count card
  And the Programs count should be displayed
  And the Programs icon should be displayed

#Scenario: Verify Program count card navigation
#When Admin clicks the Programs count card
#Then Admin should be redirected to the Manage Program page

Scenario: Verify Staff Data table
Then Admin should see the Staff Data table

Scenario: Verify Staff Data table headers
Then Admin should see the following headers in the Staff Data table
 | # |
 | First Name |
 | Last Name |
 | Phone |

Scenario: Verify Staff Data table pagination
  Then Admin should see the pagination controls


Scenario: Verify empty Staff Data table
Then Admin should see an empty Staff Data table
And the pagination should display "0 of 0"