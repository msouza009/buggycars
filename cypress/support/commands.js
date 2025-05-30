Cypress.Commands.add('login', () => {
  cy.fixture('usuario.json').then((user) => {
  cy.visit('https://buggy.justtestit.org/');
  cy.get('input[placeholder="Login"]').type(user.usuario);
  cy.get('input[name="password"][type="password"]').type(user.senha);
  cy.get('.btn-success').click();
  });
});
