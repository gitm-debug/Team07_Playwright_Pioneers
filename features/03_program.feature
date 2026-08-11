@Program @auth
Feature: Program Page Verification  

  Background:
    Given Admin is logged in to LMS Portal
    When Admin clicks "Program" on the navigation bar in lms portal

    @navigateToProgramPage
    Scenario: Navigate to Program page from home page  
      Then Admin should be navigated to Program page in lms portal

    @ValidateProgramPageUIElmts
    Scenario: Validate Program Page UI elements  
      Then All required UI elements should be visible on Program page
      | elementName                |
      | Manage Program heading     |
      | Add New Program menu       |
      | Search bar                 |
      | Search placeholder         |
      | Table headers              |
      | Row checkboxes             |
      | Edit icons                 |
      | Delete icons               |
       #Add New Program Ui elements validation

    @ValidateAddNewPrgUIValidation
    Scenario Outline: Add New Program - UI Validation
     When Admin clicks "Add New Program" under the "Program" menu bar
     Then <validation> is displayed

    Examples:
      | validation                        |
      | Add New Program dialog            |
      | Program Details dialog title      |
      | Mandatory fields indicator        |
      | Name field                        |
      | Description field                 |
      | Status radio buttons              |
      #Add New Program - Functional Validation

    @AddNewProgramDatadriven @SearchProgram
   Scenario Outline: Add new program with valid details         
    When Admin clicks on "Add New Program", enters details for fields using "<testDataKey>", and clicks the program save button    
    Then Admin should see appropriate message for program
    
   Examples:
     | testDataKey               |        
     | emptyName                 |
     | singleCharName            |
     | twoCharName               |
     | threeCharName             |
     | numericOnlyName           |
     | numericStartName          |
     | specialCharName           |
     | spaceInName               |
     | startsWithHyphen          | 
     | invalidDescription        |
     | emptyStatus               |
     | duplicateProgram          |
     | emptyPrgSubmission        |
     | validProgram1             |  
     | validProgram2             |
     | validProgram3             | 

   @ProgramDetailsCloseIcon
   Scenario: Close icon functionality of Program    
    When Admin clicks on "Add New Program", clicks on close icon on the top right corner of the Program details dialog box with out entering details    
    Then Admin should see Program details dialog box closed without creating new Program

    @ProgramDetailsCancelBtn
   Scenario: Cancel Button functionality of Program    
    When Admin clicks on "Add New Program", clicks on cancel button of the Program details dialog box with out entering details    
    Then Admin should see Program details dialog box closed without creating new Program
     
    @SearchProgram
    Scenario Outline: Verify stored program search
    When Admin searches for stored program by "<searchType>"
    Then Admin should see the program in search results for "<searchType>"

    Examples:
      | searchType |
      | name       |
      | description|
      | partial    |

   @SearchNonExistingProgram 
  Scenario: Search by Non-Existent Program Name
    When Admin enters "NonExistentProgram123" in the search box
    Then There should be zero results

    @Edit
    Scenario: Edit icon functionality
    When Admin clicks on Edit option for a particular program
    Then Admin should see  Edit Program Details dialog for program

    @Edit
    Scenario Outline: Edit program field
    When Admin clicks on Edit option, edits the "<field>" and clicks on Save button
    Then Admin should see "Successful Program Updated" message

    Examples:
      | field        |
      | name         |
      | description  |     
     
    @Edit
    Scenario: Verify edited Program details
    When Admin searches with updated program name
    Then Admin verifies that the details are correctly updated     

    @progrmSort
    Scenario: Sorting of Program name in Descending order
    Given Admin is in program page where Program names are sorted in ascending order
    When Admin clicks on Arrow next to program Name
    Then Admin should see the Program Name is sorted in Descending order

     @progrmSort
  Scenario: Sorting of Program Description in Ascending order
    When Admin clicks on Arrow next to Program Description
    Then Admin should see the Program Description is sorted in Ascending order

   @progrmSort
  Scenario: Sorting of Program Description in Descending order
    Given Admin is in program page where Program descriptions are sorted in ascending order
    When Admin clicks on Arrow next to Program Description
    Then Admin should see the Program Description is sorted in Descending order

 @progrmSort
  Scenario: Sorting of Program status in Ascending order
    When Admin clicks on Arrow next to Program status
    Then Admin should see the Program status sorted in Ascending order
   @progrmSort
  Scenario: Sorting of Program status in Descending order
    Given Admin is in program page where Program status are sorted in ascending order
    When Admin clicks on Arrow next to Program status
    Then Admin should see the Program status sorted in Descending order

#Delete multiple program

Scenario: Select multiple programs
When Admin selects more than one program by clicking on the checkbox
Then the multiple delete button under manage program must be enabled

Scenario: Delete Multiple programs
Given Admin has selected multiple programs
When Admin clicks on the delete button on the left top of the program page
Then Admin lands on the Confirmation form

Scenario: Delete selected program
Given Admin is on the Confirmation form
When Admin clicks on "Yes" button
Then Admin can see "Successful Programs Deleted" message

Scenario: Deleted program Visibility
Given Admin has deleted a program
When Admin searches for "Deleted Program names"
Then There should be zero results

Scenario: Cancel Multiple Deletion
Given Admin is on the Confirmation form
When Admin clicks on "No" button
Then Admin can see Programs are still selected and not deleted

Scenario: Close Multiple deletion confirmation
Given Admin is on the Program Confirm Deletion Page after selecting a program to delete
When Admin Click on "X" button
Then Admin can see Confirm Deletion form disappear

# Pagination
  Scenario: Next Page Navigation
    Given Admin is on the Program page with multiple records
    When Admin clicks the next page option (>) in the pagination control
    Then Admin should navigate to the next page and see the next set of program records

  Scenario: Last Page Navigation
    Given Admin is on any page except the last page of Program table
    When Admin clicks the last page option (>>) in the pagination control
    Then Admin should see the last page record on the table

  Scenario: Previous Page Navigation
    Given Admin is on the Program table on any page except the first page
    When Admin clicks the previous page option (<) in the pagination control
    Then Admin should see the previous page record on the table

  Scenario: First Page Navigation
    Given Admin is on any page except the first page of Program table
    When Admin clicks the first page option (<<) in the pagination control
    Then Admin should see the very first page record on the table

  Scenario: pagination when there are no records
    Given Admin is on home page after login
    When Admin clicks "Program" on the navigation bar
    Then "Showing 0 to 0 of 0 entries" should be displayed

  Scenario: pagination when there are less than 5 records
    Given Admin is on home page after login
    When Admin clicks "Program" on the navigation bar
    Then Admin should see pagination icons disabled   



