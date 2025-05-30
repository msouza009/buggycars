import { fakerPT_BR as faker } from "@faker-js/faker";

const endereco = faker.location.streetAddress();
const telefone = faker.phone.number('## #####-####');
const idade = 19;

describe('Acessa o perfil do usuário', () => {
    beforeEach(() => {
        cy.login();
    })

    it.only('Acessa a página de perfil e preenche o formulário', () => {
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('#gender').type('Male');
        cy.get('#age').clear().type(idade.toString());
        cy.get('#address').type(endereco);
        cy.get('#phone').type(telefone);
        cy.get('#hobby').select('Video Games');
        cy.get('.btn-default').click();
    })
});