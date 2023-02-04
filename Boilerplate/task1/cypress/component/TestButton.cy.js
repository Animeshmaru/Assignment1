import React from 'react'
import App from '../../src/App.js'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />)
    
    cy.title().should('eq', 'Components App');
    
    cy.get('#heading').contains('What is the advantage of useRef Hook?')
    
    cy.get('#btn').click();
    
    cy.get('#sol').contains('One of the advantage of the useRef hook is that it not rerenders to the DOM.')
  })
})
