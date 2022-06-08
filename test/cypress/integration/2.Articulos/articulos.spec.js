describe('The Dashboard Page', () => {
    beforeEach(() => {
        cy.login()        
        cy.visit(`${Cypress.env('HOST')}admin/dashboard`)
    })

    it('Successfully Articulos Search and Clear', () => {        
        cy.wait(500)
        cy.get('[name=item-articulos]').click()
        cy.wait(500)
        cy.get('#search').click({ force: true }).type('test{enter}')
        cy.wait(1500)
        cy.get('#clear').click()
        cy.wait(500)                
        cy.get('[name=table-articulos]').find('tr').its('length').should('be.gt', 1)
    })
})