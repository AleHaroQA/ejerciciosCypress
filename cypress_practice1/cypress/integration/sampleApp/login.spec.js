context('Login', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Test #1', () => {
        cy.get('input:first').type('user0001');
        cy.get('input:last').type('pwd');
        cy.get('#login').click();
        //cy.get('.text-success').should('be.visible');
        cy.get('.text-success').should('be.visible').should('have.text', `Welcome, user0001!`);
    })
})