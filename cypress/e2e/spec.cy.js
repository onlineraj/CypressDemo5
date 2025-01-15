describe('Test Suite', () => {
  it('My First Basic Test', () => {
    cy.visit('/');
    //cy.screenshot("1");
    cy.title().should('eq','HR Software Solutions | Cloud based HRMS | HR System | Zoho People');
    cy.log(Cypress.env("foo"));
    cy.log("Test 1 passed");
    
  })
  it("No. of links on Zoho Home Page",()=>{
    cy.visit('/');
    cy.get('a').should('have.length',446);
  })
})
