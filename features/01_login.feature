@noauth
Feature: Login Page - UI Verification

  Background:
    Given Admin is on the browser

  Scenario: Login page is displayed successfully
    When Admin enters the valid LMS app URL
    Then Admin should land on the login page

  Scenario: Access app with invalid URL
    When Admin enters a non-existent domain URL
    Then Admin should receive application error

  Scenario: Broken link verification
    When Admin enters a non-existent page URL
    Then HTTP response should be greater than or equal to 400

  Scenario: Application title is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see LMS - Learning Management System

  Scenario: Application logo is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see application logo

  Scenario: Company name is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see company name below the app name

  Scenario: Login instruction message is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see Please login to LMS application message

  Scenario: Input fields are displayed
    When Admin enters the valid LMS app URL
    Then Admin should see two text fields

  Scenario: Role dropdown is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see one dropdown

  Scenario: Text presence on the first field
    When Admin enters the valid LMS app URL
    Then Admin should see User in the first text field

  Scenario: Text presence on the second field
    When Admin enters the valid LMS app URL
    Then Admin should see Password in the second text field

  Scenario: Asterisk is displayed for user field
    When Admin enters the valid LMS app URL
    Then Admin should see asterisk mark next to user field

  Scenario: Asterisk is displayed for password field
    When Admin enters the valid LMS app URL
    Then Admin should see asterisk mark next to password field

  Scenario: Placeholder presence in dropdown
    When Admin enters the valid LMS app URL
    Then Admin should see select the role placeholder in dropdown

  Scenario: Dropdown options to select role
    When Admin enters the valid LMS app URL
    Then Admin should see Admin staff student options in dropdown

  Scenario: Alignment of the login form
    When Admin enters the valid LMS app URL
    Then Admin should see login form on the centre of the page

  Scenario: Input field label alignment
    When Admin enters the valid LMS app URL
    Then Username Password labels should be left aligned above their respective input fields

  Scenario: Login button is displayed
    When Admin enters the valid LMS app URL
    Then Admin should see login button

  Scenario: User field placeholder text colour
    When Admin enters the valid LMS app URL
    Then Admin should see user text in gray color

  Scenario: Password field placeholder text colour
    When Admin enters the valid LMS app URL
    Then Admin should see password text in gray color

  Scenario Outline: Login with <scenario>
    When Admin enters email "<email>" and password "<password>" and role "<role>" and clicks login
    Then Admin should see "<expected>"

    Examples:
      | scenario                    | email            | password  | role  | expected                                 |
      | valid credentials           | valid@email.com  | pass123   | Admin | home page                                |
      | special chars in username   | !@#$%^&*()       | pass123   | Admin | Invalid username and password please try again |
      | empty username              |                  | pass123   | Admin | Please enter your user name              |
      | empty password              | valid@email.com  |           | Admin | Please enter your password               |
      | wrong password              | valid@email.com  | wrong     | Admin | Invalid username and password            |
      | no role selected            | valid@email.com  | pass123   |       | Please select your Role                  |
      | invalid role                | valid@email.com  | pass123   | Staff | Please select correct role               |
      | using keyboard              | valid@email.com  | pass123   | Admin | home page                                |
      | using mouse                 | valid@email.com  | pass123   | Admin | home page                                |
