Feature: Login Page

    Feature page where the users can login with their accounts
    Background: Background name
        Given A user goes to the login page
    Scenario: Successful Login
        When A user enters their email "blurn96@gmail.com" and password "roflmao25" and clicks login button
        Then A user will be logged in  

    Scenario: Incorrect Login
        When A user enters an unregistered email "testwrong@gmail.com" and password "wrong" and clicks login button
        Then A message saying "Your email or password is incorrect!" should appear and user will NOT be logged in 