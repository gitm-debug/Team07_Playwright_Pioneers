Feature: Login Page - UI Verification

  @noauth
  Scenario: Login page is displayed successfully
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should land on the login page

  @noauth
  Scenario: Access app with invalid URL
    Given Admin is on the browser
    When Admin enters the invalid LMS app URL
    Then Admin should receive application error

  @noauth
  Scenario: Broken link verification
    Given Admin is on the browser
    When Admin enters the invalid LMS app URL
    Then HTTP response should be greater than or equal to 400

  @noauth
  Scenario: Application title is displayed
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see LMS - Learning Management System

  @noauth
  Scenario: Application logo is displayed
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see application logo

  @noauth
  Scenario: Company name is displayed
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see company name below the app name

  @noauth
  Scenario: Login instruction message is displayed
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see Please login to LMS application message

  @noauth
  Scenario: Input fields are displayed
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see two text fields

  @noauth
  Scenario: Role dropdown is displayed
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see one dropdown

  @noauth
  Scenario: Text presence on the first field
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see User in the first text field

  @noauth
  Scenario: Text presence on the second field
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see Password in the second text field

  @noauth
  Scenario: Asterisk is displayed for user field
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see asterisk mark next to user field

  @noauth
  Scenario: Asterisk is displayed for password field
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see asterisk mark next to password field

  @noauth
  Scenario: Placeholder presence in dropdown
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see select the role placeholder in dropdown

  @noauth
  Scenario: Dropdown options to select role
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see Admin staff student options in dropdown

  @noauth
  Scenario: Alignment of the login form
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see login form on the centre of the page

  @noauth
  Scenario: Input field label alignment
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Username Password labels should be left aligned above their respective input fields

  @noauth
  Scenario: Login button is displayed
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see login button

  @noauth
  Scenario: User field placeholder text colour
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see user text in gray color

  @noauth
  Scenario: Password field placeholder text colour
    Given Admin is on the browser
    When Admin enters the valid LMS app URL
    Then Admin should see password text in gray color

  Scenario: Successfully login with valid credentials
    When Admin click login button after entering valid credentials
    Then admin should land on home page
