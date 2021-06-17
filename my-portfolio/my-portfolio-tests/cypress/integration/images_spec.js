/// <reference types="cypress"/>

it('should display images', () => {
    cy.visit('http://localhost:3000')

cy.get('#headerwrap').should('have.css', 'background').and('include', '/static/media/back.dbc45287.jpg')

  cy.get  ('a[class="navbar-brand"]').find("img").should('be.visible')
  cy.get  ('h3[class="heading"]').find("img").should('be.visible')
})




