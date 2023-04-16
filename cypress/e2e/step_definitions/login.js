import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given('A user goes to the login page', ()=>{
    cy.visit('/login')
})

When('A user enter their email {string} and password {string} and clicks login button', (username, password)=>{
    cy.get("input[data-qa='login-email']").type(username)
    cy.get("input[data-qa='login-password']").type(password)
    cy.get("button[data-qa='login-button']").click()
})

Then('A user will be logged in', ()=>{
    cy.url()
})