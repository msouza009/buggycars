Cypress.Commands.add('login', () => {
  cy.visit('https://buggy.justtestit.org/');
  cy.get('input[placeholder="Login"]').type('Davi_Macedo');
  cy.get('input[name="password"][type="password"]').type('Test@1234');
  cy.get('.btn-success').click();
  cy.contains('Hi, Davi').should('be.visible');
});
