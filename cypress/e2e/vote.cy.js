describe('Buggy Cars Rating', () => {
    beforeEach(() => {
        cy.login();
    })

    it.only('Acessa a página principal', () => {
        const carros = [ 'Diablo', 'Reventón','AVENTADOR','Veneno','Murciélago'];
        const modelo = carros[Math.floor(Math.random() * carros.length)];
        cy.title().should('eq', 'Buggy Cars Rating')
        cy.get(':nth-child(1) > .card > a > .img-fluid').click()
        cy.contains(modelo).click();
        cy.get('#comment').type('Teste de votação')
        cy.get('.btn').click();
    })
});