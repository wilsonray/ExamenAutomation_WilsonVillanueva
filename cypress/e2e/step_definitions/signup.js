import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given('A user goes to the login page to signup', ()=>{
    cy.visit('/login')
})

When('A user enters a new username {string} and email {string} and clicks signup button', (username, email)=>{
    cy.get("input[data-qa='signup-name']").type(username)
    cy.get("input[data-qa='signup-email']").type(email)
    cy.get("button[data-qa='signup-button']").click()
})

Then('The web displays the full signup formulary', ()=>{
    cy.url().should('contains', '/signup')
})

Then('The user fills the formulary and clicks create account button', ()=>{
    cy.get('input[value=Mr]').click()
    cy.get("input[data-qa='password']").type('passwordtest')
    cy.get("select[data-qa='days']").select('15')
    cy.get("select[data-qa='months']").select('5')
    cy.get("select[data-qa='years']").select('1995')
    cy.get("input[name='newsletter']").click()
    cy.get("input[name='optin']").click()
    cy.get("input[data-qa='first_name']").type('New')
    cy.get("input[data-qa='last_name']").type('Test User')
    cy.get("input[data-qa='company']").type('Company X')
    cy.get("input[data-qa='address']").type('St. Example')
    cy.get("input[data-qa='address2']").type('--')
    cy.get("select[data-qa='country']").select('Canada')
    cy.get("input[data-qa='state']").type('Ohio')
    cy.get("input[data-qa='city']").type('Colombus')
    cy.get("input[data-qa='zipcode']").type('43017')
    cy.get("input[data-qa='mobile_number']").type('123456789')
    cy.get("button[data-qa='create-account']").click()
})

Then('The user has created their account', ()=>{
    cy.url().should('contains', '/account_created')
})

Then('The user clicks continue button', ()=>{
    cy.get("a[data-qa='continue-button']").click()
    cy.get("b").contains("new test user")
})