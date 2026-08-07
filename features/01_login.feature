Feature: Login Page - UI Verification

  Background:
    Given Admin is on the browser

  @noauth
  Scenario: Login page is displayed successfully
    When Admin enters the valid LMS app URL
    Then Admin should land on the login page

  @noauth
  Scenario: Access app with invalid URL
    When Admin enters the invalid LMS app URL
    Then Admin should receive application error

  @noauth
  Scenario: Broken link verification
    When Admin enters the invalid LMS app URL
    Then HTTP response should be greater than or equal to 400

  @noauth
  Scenario: Application title is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see LMS - Learning Management System

  @noauth
  Scenario: Application logo is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see application logo

  @noauth
  Scenario: Company name is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see company name below the app name

  @noauth
  Scenario: Login instruction message is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see Please login to LMS application message

  @noauth
  Scenario: Input fields are displayed
    When Admin enters the valid LMS app URL
    Then Admin should see two text fields

  @noauth
  Scenario: Role dropdown is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see one dropdown

  @noauth
  Scenario: Text presence on the first field
    When Admin enters the valid LMS app URL
    Then Admin should see User in the first text field

  @noauth
  Scenario: Text presence on the second field
    When Admin enters the valid LMS app URL
    Then Admin should see Password in the second text field

  @noauth
  Scenario: Asterisk is displayed for user field
    When Admin enters the valid LMS app URL
    Then Admin should see asterisk mark next to user field

  @noauth
  Scenario: Asterisk is displayed for password field
    When Admin enters the valid LMS app URL
    Then Admin should see asterisk mark next to password field

  @noauth
  Scenario: Placeholder presence in dropdown
    When Admin enters the valid LMS app URL
    Then Admin should see select the role placeholder in dropdown

  @noauth
  Scenario: Dropdown options to select role
    When Admin enters the valid LMS app URL
    Then Admin should see Admin staff student options in dropdown

  @noauth
  Scenario: Alignment of the login form
    When Admin enters the valid LMS app URL
    Then Admin should see login form on the centre of the page

  @noauth
  Scenario: Input field label alignment
    When Admin enters the valid LMS app URL
    Then Username Password labels should be left aligned above their respective input fields

  @noauth
  Scenario: Login button is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see login button

  @noauth
  Scenario: User field placeholder text colour
    When Admin enters the valid LMS app URL
    Then Admin should see user text in gray color

  @noauth
  Scenario: Password field placeholder text colour
    When Admin enters the valid LMS app URL
    Then Admin should see password text in gray color

  @noauth
  Scenario: Successfully login with valid credentials
    When Admin click login button after entering valid credentials
    Then admin should land on home page

  @noauth
  Scenario: Login with special characters in username
    When Admin enters special characters in username and clicks login
    Then Admin should see error message "Invalid username and password Please try again"

  @noauth
  Scenario: Login attempt with empty username
    When Admin enters only password and clicks login
    Then Admin should see error message "Please enter your user name"

  @noauth
  Scenario: Login attempt with empty password
    When Admin enters only username and clicks login
    Then Admin should see error message "Please enter your password"

  @noauth
  Scenario: Login attempt with wrong password
    When Admin enters valid username and wrong password and clicks login
    Then Admin should see error message "Invalid username and password Please try again"

  @noauth
  Scenario: Login attempt without selecting any role
    When Admin enters valid username and password without selecting role and clicks login
    Then Admin should see error message "Please select your role"

  @noauth
  Scenario: Login attempt with invalid role
    When Admin selects invalid role and clicks login
    Then Admin should see error message "Please select correct role"

  @noauth
  Scenario: Login attempt using keyboard
    When Admin clicks login button after entering valid credentials through keyboard
    Then admin should land on home page

  @noauth
  Scenario: Login attempt using mouse
    When Admin clicks login button after entering valid credentials through mouse
    Then admin should land on home page
