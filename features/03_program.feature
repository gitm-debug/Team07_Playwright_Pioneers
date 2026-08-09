@Program @auth
Feature: Program Page Verification  

  Background:
    Given Admin is logged in to LMS Portal
    When Admin clicks "Program" on the navigation bar in lms portal

    Scenario: Navigate to Program page from home page  
      Then Admin should be navigated to Program page in lms portal

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

    @AddNewProgramDatadriven
   Scenario Outline: Add new program with valid details         
    When Admin clicks on "Add New Program", enters details for fields using "<testDataKey>", and clicks the program save button    
    Then Admin should see appropriate message for program
    
   Examples:
     | testDataKey               |
     | validProgram1             |  
     | validProgram2             |
     | validProgram3             |     
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
     