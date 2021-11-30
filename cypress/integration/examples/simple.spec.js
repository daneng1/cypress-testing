describe('Browser Actions', () => {
    it('should load correct url', () => {
        cy.visit('https://books.toscrape.com/', { timeout: 10000 })
    })

    it('should check correct url', () => {
        cy.url().should('include', 'toscrape.com')
    })

    it('should click on Poetry', () => {
        cy.get('a').contains('Poetry').click();
    })

    it('should click on Olio book', () => {
        cy.get('a').contains('Olio').click();
    })

    it('should confirm the price', () => {
        cy.get('.price_color').contains('£23.88')
        cy.log('website loading')
    })

    // it('should check for correct element on the page', () => {
    //     cy.get('h1').should('be.visible')
    // })
})
