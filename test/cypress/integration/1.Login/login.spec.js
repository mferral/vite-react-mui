describe('The Login Page', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('HOST')}login`) // change URL to match your dev URL
    })

    it('Unsuccessfully Login', () => {
        cy.get('input[name=email]').type(Cypress.env('USER'))
        cy.get('input[name=password]').type('12345')
        cy.get('[name=submit]').click()
        cy.wait(500)
        cy.get('[name=alert-error]').should('be.visible')
    })

    it('Successfully Login', () => {
        cy.get('input[name=email]').type(Cypress.env('USER'))
        cy.get('input[name=password]').type(Cypress.env('PASS'))
        cy.get('[name=submit]').click().should(() => {
            expect(localStorage.getItem('token')).to.exist
        })
        cy.wait(500)
        // cy.get('[name=alert-error]').should('not.exist')
        
        cy.url().should('include', '/dashboard')  // la url include /dashboard
    })
})