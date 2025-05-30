import { fakerPT_BR as faker } from '@faker-js/faker';

describe('Buggy Cars Rating', () => {
    const nome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const usuario = faker.internet.userName({ firstName: nome, lastName: sobrenome });
    const senha = 'Test@1234';


    beforeEach(() => {
        cy.visit('https://buggy.justtestit.org/')
    })

    it.only('Acessa a página principal', () => {
        cy.title().should('eq', 'Buggy Cars Rating')
    })

    it.only('Clica no botão de registro e efetua o registro', () => {
        cy.get('.btn-success-outline').click().should('have.text', 'Register')
        cy.get('#username').type(usuario);
        cy.get('#firstName').type(nome);
        cy.get('#lastName').type(sobrenome);
        cy.get('#password').type(senha);
        cy.get('#confirmPassword').type(senha);
        cy.get('.btn-default').click().should('have.text', 'Register');
        cy.writeFile('cypress/fixtures/usuario.json', {
            usuario: usuario,
            senha: senha,
        });
    });
})