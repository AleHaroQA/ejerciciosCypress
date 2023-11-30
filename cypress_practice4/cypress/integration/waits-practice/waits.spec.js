/// <reference types="cypress" />
describe('First examples waits', () =>{
    beforeEach(() => {
        cy.visit('/')
    })
        //NO RECOMENDABLE
        it('Implicit wait', () =>{
            cy.get('#ajaxButton').click()
            cy.wait(12000)
            cy.get('.bg-success').should('be.visible')
        })

        it('Explicit wait(BDD)', () =>{
            cy.get('#ajaxButton').click()
            
            cy.get('.bg-success',{timeout: 20000}).should('be.visible')
        })

        it.only('Default wait time ', () =>{
            cy.get('#ajaxButton').click()
            
            cy.get('.bg-success').should('not.exist')
        })

})