describe('Form Validations', () => {
    it('Checks all fields are required and validates email and password', () => {
      cy.visit('https://dev-fe.buttonshift.com');
  
      // Navigate to Signup page
      cy.contains('Signup').click();
  
      // Try to submit the form without filling it out
      cy.get('button[type="submit"]').click();
      cy.contains('Email is required').should('be.visible');
      cy.contains('Password is required').should('be.visible');
      cy.contains('Confirm Password is required').should('be.visible');
  
      // Validate email format
      cy.get('input[name="email"]').type('invalidEmail');
      cy.get('button[type="submit"]').click();
      cy.contains('Invalid email format').should('be.visible');
  
      // Validate password requirements
      cy.get('input[name="email"]').clear().type('testuser@example.com');
      cy.get('input[name="password"]').type('short');
      cy.get('input[name="confirmPassword"]').type('short');
      cy.get('button[type="submit"]').click();
      cy.contains('Password must be at least 8 characters').should('be.visible');
    });
  });
  