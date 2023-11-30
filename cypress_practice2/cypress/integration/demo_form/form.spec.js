/// <reference types="cypress" />
context('Form', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Test #1(Happy path)', () => {
        cy.contains('Signup / Login').click();
        cy.get('.signup-form > h2').should('be.visible');
        cy.get('[type="text"]').type('User001');
        cy.get('.signup-form > form > [type="email"]').type('user001_@gmail.com');
        cy.get('.signup-form > form > .btn').click();
        cy.get(':nth-child(1) > b').should('be.visible');
        cy.get(':nth-child(4) > .top').click();
        cy.get('#password').type('user001_');
        cy.get('#days').select('12');
        cy.get('#months').select('12');
        cy.get('#years').select('1983');
        cy.get('#newsletter').check();
        cy.get('#optin').check();
        cy.get('#first_name').type('Santi');
        cy.get('#last_name').type('Zapico');
        cy.get('#company').type('Globant');
        cy.get('#address1').type('Calle 1790');
        cy.get('#country').select('Australia');
        cy.get('#state').type('Melbourne');
        cy.get('#city').type('Melbourne');
        cy.get('#zipcode').type('54321');
        cy.get('#mobile_number').type('987654321');
        cy.get('.login-form > form > .btn').click();
        cy.get('b').should('be.visible');
    })
})

     //cy.url().should('contain', '#login');
