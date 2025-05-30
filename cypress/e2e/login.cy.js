describe('Buggy Cars Rating', () => {
    beforeEach(() => {
        cy.visit('https://buggy.justtestit.org/')
    })

    it.only('Acessa a página principal', () => {
        cy.title().should('eq', 'Buggy Cars Rating')
    })

    it.only('Clica no botão de registro e efetua o registro', () => {
        cy.get('.btn-success-outline').click().should('have.text', 'Register')
        
    })
})