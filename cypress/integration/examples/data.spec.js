describe('Write and Read data', () => {
    it('should write data into JSON', () => {
        cy.writeFile('log.json', { name: 'Dan', age: 44 })
    })

    it('should write data into a txt file', () => {
        cy.writeFile('log.txt', 'Hello World')
    })

    it('should read and verify data from JSON file', () => {
        cy.readFile('log.json')
            .its('age')
            .should('eq', 44)
    })

    it('should read and verify data in txt file', () => {
        cy.readFile('log.txt').should('eq', 'Hello World')
    })

    it('should read and verify browser document content', () => {
        cy.visit('https://www.example.com')
        cy.wait(2000)
        cy.document().its('contentType').should('eq', 'text/html')

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
})