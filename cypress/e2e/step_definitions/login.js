import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given('A user goes to the login page', ()=>{
    cy.visit('/login')
})

When('A user enters their email {string} and password {string} and clicks login button', (username, password)=>{
    cy.get("input[data-qa='login-email']").type(username)
    cy.get("input[data-qa='login-password']").type(password)
    cy.get("button[data-qa='login-button']").click()
})

Then('A user will be logged in', ()=>{
    cy.get("b").contains("Wilson Villanueva")
})

When('A user enters an unregistered email {string} and password {string} and clicks login button', (username, password)=>{
    cy.get("input[data-qa='login-email']").type(username)
    cy.get("input[data-qa='login-password']").type(password)
    cy.get("button[data-qa='login-button']").click()
})

Then('A message saying {string} should appear and user will NOT be logged in', (message)=>{
    cy.get("p[style='color: red;']").contains(message)
})