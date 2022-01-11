/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://frontend-c3c4.netlify.app/')
  })


it('displays sidebar elements', () => {
  // We use the `cy.get()` command to get all elements that match the selector.
  // Then, we use `should` to assert that there are two matched items,
  // which are the two default items.
  cy.get('.logo .span').should('have.text', 'The Social Academy')
  cy.get('#wrapper .dropdownmenu').select(1).should('have.value', 'Jenna Ram') // Select the 'user-1' option
  cy.get('.sidebarbutton #newrec .span').should('have.text', '+ Create New Recommendation')
})
})

//displays 10 reccomendation on the homepage by default