describe('Keyboard press simulation', () => {
    it('should submit searchbox when pressing enter', () => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#searchTerm').type(' Some text {enter}');
        // add name of key to enter inside curly brackets
    })
})
