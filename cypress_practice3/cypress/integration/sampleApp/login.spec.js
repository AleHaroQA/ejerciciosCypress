context('Login', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Happy path', () => {
        cy.fixture('login1').then((data) => {
            cy.get('input:first').type(data.userName);
            cy.get('input:last').type(data.password);
        })
        cy.get('#login').click();
        cy.get('.text-success').should('be.visible').should('have.text', `Welcome, user001!`);
    })

    it('Invalid password', () => {
        cy.fixture('login2').then((data) => {
            cy.get('input:first').type(data.userName);
            cy.get('input:last').type(data.password);
        })
        cy.get('#login').click();
        cy.get('#loginstatus').should('be.visible').should('have.text', `Invalid username/password`);
    })

    it('Empty credentials', () => {
        cy.fixture('login3').then((data) => {
            cy.get('input:first').type(data.userName);
            cy.get('input:last').type(data.password);
        })
        cy.get('#login').click();
        cy.get('#loginstatus').should('be.visible').should('have.text', `Invalid username/password`);
    })

    it('Empty user name', () => {
        cy.fixture('login4').then((data) => {
            cy.get('input:last').type(data.password);
        })
        cy.get('#login').click();
        cy.get('#loginstatus').should('be.visible').should('have.text', `Invalid username/password`);
    })

})

