Feature: Login UI

  @noauth
  Scenario: Login page displayed successfully
   Given Admin is on the browser
   When Admin enters valid LMS app UPL
   Then Admin should land on the login page

  @noauth
  Scenario: Acess App wit invalid URL
   Given Admin is on the browser
   When Admin enters invalid LMS app URL
   Then Admin should receive application error

  @noauth
  Scenario: Application title is Displayed
   Given Admin is on the browser
   When Amdin enters valid LMS app URL
   Then Admin should see LMS - Learning Management System

 Scenario: Successfully login with valid credentials
 When Admin click login button after entering valid credentials
 Then admin should land on home page
