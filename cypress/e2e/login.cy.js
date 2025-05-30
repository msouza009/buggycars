describe('Buggy Cars Rating', () => {
    beforeEach(() => {
        cy.visit('https://buggy.justtestit.org/')
    })

    it.only('Acessa a página principal', () => {
        cy.title().should('eq', 'Buggy Cars Rating')
    })

    it.only('Clica no botão de login e efetua o login', () => {
        cy.fixture('usuario.json').then((user) => {
        cy.get('input[placeholder="Login"]').type(user.usuario);
        cy.get('input[name="password"][type="password"]').type(user.senha);
        cy.get('.btn-success').click().should('have.text', 'Login');
    });
    })
})