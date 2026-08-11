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


     

