describe('Screenshots', () => {
    it('should capture whole page', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot( { capture: 'fullPage'})
    })

    it('should capture a single element', () => {
        cy.get('header').screenshot()
    })
})