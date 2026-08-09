@auth
Feature: Manage Batch - Sorting

  Background:
    Given Admin is on Batch page

  Scenario: Sorting of Batch Name in Ascending order
    When Admin clicks on Arrow next to batch name
    Then Admin should see the Batch Name is sorted in Ascending order

  Scenario: Sorting of Batch Name in Descending order
    Given Admin is in batch page where Batch names are sorted in ascending order
    When Admin clicks on Arrow next to batch name
    Then Admin should see the Batch Name is sorted in Descending order

  Scenario: Sorting of Batch Description in Ascending order
    When Admin clicks on Arrow next to batch description
    Then Admin should see the Batch Description is sorted in Ascending order

  Scenario: Sorting of Batch Description in Descending order
    Given Admin is in batch page where Batch descriptions are sorted in ascending order
    When Admin clicks on Arrow next to batch description
    Then Admin should see the Batch Description is sorted in Descending order

  Scenario: Sorting of Number of classes in Ascending order
    When Admin clicks on Arrow next to number of classes
    Then Admin should see the Number of Classes is sorted in Ascending order

  Scenario: Sorting of Number of classes in Descending order
    Given Admin is in batch page where Number of classes are sorted in ascending order
    When Admin clicks on Arrow next to number of classes
    Then Admin should see the Number of Classes is sorted in Descending order

  Scenario: Sorting of Batch status in Ascending order
    When Admin clicks on Arrow next to batch status
    Then Admin should see the Batch Status is sorted in Ascending order

  Scenario: Sorting of Batch status in Descending order
    Given Admin is in batch page where Batch status are sorted in ascending order
    When Admin clicks on Arrow next to batch status
    Then Admin should see the Batch Status is sorted in Descending order
