@noauth
Feature: Login Page - UI Verification

  Background:
    Given Admin is on the browser

  @loginPageDisplayed
  Scenario: Login page is displayed successfully
    When Admin enters the valid LMS app URL
    Then Admin should land on the login page

  @invalidUrl
  Scenario: Access app with invalid URL
    When Admin enters a non-existent domain URL
    Then Admin should receive application error

  @brokenLink
  Scenario: Broken link verification
    When Admin enters a non-existent page URL
    Then HTTP response should be greater than or equal to 400

  @loginTitle
  Scenario: Application title is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see LMS - Learning Management System

  @loginLogo
  Scenario: Application logo is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see application logo

  @loginCompanyName
  Scenario: Company name is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see company name below the app name

  @loginInstructionMsg
  Scenario: Login instruction message is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see Please login to LMS application message

  @loginInputFields
  Scenario: Input fields are displayed
    When Admin enters the valid LMS app URL
    Then Admin should see two text fields

  @loginRoleDropdown
  Scenario: Role dropdown is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see one dropdown

  @loginUserFieldLabel
  Scenario: Text presence on the first field
    When Admin enters the valid LMS app URL
    Then Admin should see User in the first text field

  @loginPasswordFieldLabel
  Scenario: Text presence on the second field
    When Admin enters the valid LMS app URL
    Then Admin should see Password in the second text field

  @loginUserAsterisk
  Scenario: Asterisk is displayed for user field
    When Admin enters the valid LMS app URL
    Then Admin should see asterisk mark next to user field

  @loginPasswordAsterisk
  Scenario: Asterisk is displayed for password field
    When Admin enters the valid LMS app URL
    Then Admin should see asterisk mark next to password field

  @loginDropdownPlaceholder
  Scenario: Placeholder presence in dropdown
    When Admin enters the valid LMS app URL
    Then Admin should see select the role placeholder in dropdown

  @loginDropdownOptions
  Scenario: Dropdown options to select role
    When Admin enters the valid LMS app URL
    Then Admin should see Admin staff student options in dropdown

  @loginFormAlignment
  Scenario: Alignment of the login form
    When Admin enters the valid LMS app URL
    Then Admin should see login form on the centre of the page

  @loginLabelAlignment
  Scenario: Input field label alignment
    When Admin enters the valid LMS app URL
    Then Username Password labels should be left aligned above their respective input fields

  @loginButtonDisplayed
  Scenario: Login button is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see login button

  @loginUserPlaceholderColor
  Scenario: User field placeholder text colour
    When Admin enters the valid LMS app URL
    Then Admin should see user text in gray color

  @loginPasswordPlaceholderColor
  Scenario: Password field placeholder text colour
    When Admin enters the valid LMS app URL
    Then Admin should see password text in gray color

  @loginCredentials
  Scenario Outline: Login with <scenario>
    When Admin enters the credentials for "<scenario>" and clicks login
    Then Admin should see the result for "<scenario>"

    Examples:
      | scenario                  |
      | valid credentials         |
      | special chars in username |
      | empty username            |
      | empty password            |
      | wrong password            |
      | no role selected          |
      | invalid role              |
      | using keyboard            |
      | using mouse               |
