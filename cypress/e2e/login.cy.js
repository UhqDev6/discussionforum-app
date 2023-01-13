/**
 * - Login spec
 *  - should display login page correctly
 *  - should display alert when email is empty
 *  - should display alert when password is empty
 *  - should display alert when email and password are wrong
 *  - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    // verify which elements should appear on the login page
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Sign in$/).should('be.visible');
  });

  it('should display alert when username is empty', () => {
    // fill in the password
    cy.get('input[placeholder="Password"]').type('12345');

    // click the Sign in button without filling in the Email
    cy.get('button').contains(/^Sign in$/).click();

    // verify window.alert to display message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"id" is not a allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // fill in the Email
    cy.get('input[placeholder="Email"]').type('testing@gmail.com');

    // click the Sign in button without filling in the Password
    cy.get('button').contains(/^Sign in$/).click();

    // verify window.alert to display message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"id" is not a allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    // fill in the Email
    cy.get('input[placeholder="Email"]').type('testing@gmail.com');

    // fill in the wrong Password
    cy.get('input[placeholder="Password"]').type('wrong_password');

    // click the Sign in button
    cy.get('button').contains(/^Sign in$/).click();

    // verify window.alert to display message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('User ID or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    // fill in the Email
    cy.get('input[placeholder="Email"]').type('uhq@gmail.com');

    // fill in the Password
    cy.get('input[placeholder="Password"]').type('1111111');

    // click the Sign in button
    cy.get('button').contains(/^Sign in$/).click();

    // verify that the elements that are on the homepage are displayed
    cy.get('div').contains(/^Most Popular$/).should('be.visible');
    cy.get('div').contains(/^Welcome To Forum Apps$/).should('be.visible');
  });
});
