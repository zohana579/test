
Feature: Tek School Scenarios

Background:

  Given User is on  TekSchool page
  And User Click on Test Environment link
  And User should see Test Environment page

@SDET_003
Scenario: SDET2019AUG_SDET_003_Execution


  When user click on my account menue on top of the page 
  And user enter "teststudent@gmail.com" and password "Tek@Test.com" in returning menue
  And user click on login botton 
  Then user sould be loged in
  
  @SDET_003
  scenario outline: SDET2019AUG_SDET_003_Execution with multiple user and password
  When user click on my account menue on top of the page 
  And user enter "teststudent@gmail.com" and password "Tek@Test.com" in returning menue
  And user click on login botton 
  Then user sould be loged in
  
  Examples:
  
  |username|password|
  |teststudent@gmail.com|Tek@Test.com|
  |tekschool001@gmail.com|testtest|
  |testdata@gmail.com|testdata|
  