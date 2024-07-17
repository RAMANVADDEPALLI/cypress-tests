describe('User Signup and Login', () => {
    it('Successfully signs up and logs in', () => {
      cy.visit('https://dev-fe.buttonshift.com');
  
      // Navigate to Signup page
      cy.contains('Signup').click();
  
      // Fill out signup form
      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="password"]').type('testPassword');
      cy.get('input[name="confirmPassword"]').type('testPassword');
      cy.get('button[type="submit"]').click();
  
      // Verify successful signup
      cy.url().should('include', '/community');
  
      // Navigate to Login page
      cy.contains('Login').click();
  
      // Fill out login form
      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="password"]').type('testPassword');
      cy.get('button[type="submit"]').click();
  
      // Verify successful login
      cy.contains('Logout').should('exist');
    });
  });
  