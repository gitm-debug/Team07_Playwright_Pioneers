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
Then Admin can see "Successful programs deleted" message

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



