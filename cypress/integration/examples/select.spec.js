
describe('Select Box', () => {
    it('should load website with select box', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    })

    it('should select an option from select box', () => {
        cy.get('#preferred-interface').select('Both');
        cy.get('#preferred-interface').should('have.value', 'Both')

        cy.get('#preferred-interface').select('JavaScript API');
        cy.get('#preferred-interface').should('have.value', 'JavaScript API')

        cy.get('input[id="remote-testing"]').click();
        cy.get('input[id="reusing-js-code"]').click();
        cy.get('input[id="tried-test-cafe"]').click();

        cy.get('#slider')
            .children('span').click()

        cy.get('#comments').type('I don\'t really think much about this site')
    })
})