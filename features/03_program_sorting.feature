@auth
Feature: Manage Program - Sorting

  Background:
    Given Admin is on Program page

  Scenario: Sorting of Program name in Ascending order
    When Admin clicks on Arrow next to program Name
    Then Admin should see the Program Name is sorted in Ascending order

  Scenario: Sorting of Program name in Descending order
    Given Admin is in program page where Program names are sorted in ascending order
    When Admin clicks on Arrow next to program Name
    Then Admin should see the Program Name is sorted in Descending order

  Scenario: Sorting of Program Description in Ascending order
    When Admin clicks on Arrow next to Program Description
    Then Admin should see the Program Description is sorted in Ascending order

  Scenario: Sorting of Program Description in Descending order
    Given Admin is in program page where Program descriptions are sorted in ascending order
    When Admin clicks on Arrow next to Program Description
    Then Admin should see the Program Description is sorted in Descending order

  Scenario: Sorting of Program status in Ascending order
    When Admin clicks on Arrow next to Program status
    Then Admin should see the Program status sorted in Ascending order

  Scenario: Sorting of Program status in Descending order
    Given Admin is in program page where Program status are sorted in ascending order
    When Admin clicks on Arrow next to Program status
    Then Admin should see the Program status sorted in Descending order
