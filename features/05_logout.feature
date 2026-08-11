@auth
Feature: Logout Page - Validation on Logout button

  Background:
    Given Admin is logged into the application

  Scenario: Logout function
    Given Admin is in home page
    When Admin clicks on the logout in the menu bar
    Then Admin should be redirected to login page
