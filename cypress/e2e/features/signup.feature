Feature: Signup Page

    Feature page where the users can signup and create new accounts

    Scenario: Successful SignUp
        Given A user goes to the login page to signup
        When A user enters a new username "new test user" and email "emailtest10@gmail.com" and clicks signup button
        Then The web displays the full signup formulary
        Then The user fills the formulary and clicks create account button
        Then The user has created their account
        Then The user clicks continue button