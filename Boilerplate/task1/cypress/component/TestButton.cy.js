import React from 'react'
import App from '../../src/App.js'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />)
    
    cy.title().should('eq', 'Components App');
    
    cy.contains('What is the advantage of useRef Hook?')
    
    cy.get('#btn').click();
    
    cy.contains('useRef hook not rerenders to the DOM.')
  })
})
