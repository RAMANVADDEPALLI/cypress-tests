///<reference types="cypress"/>

describe('User Signup and Login', () => {
  it('Successfully signs up and logs in', () => {
    cy.visit('https://dev-fe.buttonshift.com', { timeout: 30000 }); // Increase visit timeout to 30 seconds

    cy.contains('Signup', { timeout: 10000 }).click(); // increases the timeout to 10 seconds


    // Perform signup actions
    cy.get('input[name="email"]').type(Cypress.env('CYPRESS_EMAIL'));
    cy.get('input[name="password"]').type(Cypress.env('CYPRESS_PASSWORD'));
    cy.get('button[type="submit"]').click();

    // Assertion for successful signup (adjust as per your application flow)
    cy.contains('Welcome, User!').should('be.visible');

    // Perform login actions
    cy.contains('Logout').click(); // Example logout action

    // Assertion for successful login (adjust as per your application flow)
    cy.contains('Login').should('be.visible');
  });
});
