describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });
  
  it('allows a user to sign up', () => {
    cy.get('h1').should('contain.text', 'Login');
    
    cy.get('input').type('hi-mom');

    cy.get('button').click();

    cy.get('h1').should('contain.text', 'Success!');
  })
})