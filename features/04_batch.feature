# @batchPage
Feature: Batch Page UI
Background:	Admin is logged in to LMS Portal
  Given Admin is on home page after login

# @navigateToBatchPage
Scenario: Admin navigates to Batch page
  When Admin clicks Batch on the navigation bar
  Then Admin should be in the Manage Batch Page