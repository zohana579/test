$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolScenario.feature");
formatter.feature({
  "line": 2,
  "name": "Tek School Scenarios",
  "description": "",
  "id": "tek-school-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5181576400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on  TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "SDET2019AUG_SDET_003_Execution",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-003-execution",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@SDET_003"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user click on my account menue on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enter \"teststudent@gmail.com\" and password \"Tek@Test.com\" in returning menue",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on login botton",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 691596200,
  "status": "passed"
});
});