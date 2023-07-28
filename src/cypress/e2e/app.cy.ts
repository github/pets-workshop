/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('App', () => {
    it('should have Pets header', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
  
      // check the h1 tag to contain shelter
      cy.get('h1').contains('Adoption shelter')
    })

    it('should display todays day', () => {
      // start from the index page
      cy.visit('http://localhost:3000/')

      // get today's long day name
      const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

      // confirm div with id of hours has today's day
      cy.get('#hours').contains(today)
    })
  })
  
  // Prevent TypeScript from reading file as legacy script
  export {}