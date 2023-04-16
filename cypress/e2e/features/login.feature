Feature: Login Page

    Feature page where the users can login with their accounts

    Scenario: Successful Login
        Given A user goes to the login page
        When A user enter their email "blurn96@gmail.com" and password "roflmao25" and clicks login button
        Then A user will be logged in  