import { errorMessages } from "../../src/components/register"
beforeEach(() => {
  cy.visit('http://192.168.1.30:5173/')
})
describe('Registe Page', () => {
  describe('Error Messages', () => {
    it('name input throws error for chars', () => {
      //Arrange
      //cy.visit('http://localhost:5173/')
      //Act
      cy.get('[data-cy="ad-input"]').type("em")
      //Asset
      cy.contains(errorMessages.ad);    
    })
  it('Surname input throws error for chars', () => {
    //Arrange
   // cy.visit('http://localhost:5173/')
    //Act
    cy.get('[data-cy="soyad-input"]').type("şa")
    //Asset
    cy.contains(errorMessages.soyad);    
  })

  it('Email input throws error for chars', () => {
    //Arrange
   // cy.visit('http://localhost:5173/')
    //Act
    cy.get('[data-cy="email-input"]').type("emre@wit.")
    //Asset
    cy.contains(errorMessages.email);    
  })
  it('Password input throws error for 1234', () => {
    //Arrange
   // cy.visit('http://localhost:5173/')
    //Act
    cy.get('[data-cy="password-input"]').type("1234")
    //Asset
    cy.contains(errorMessages.password);    
  })

  it('button is disabled for unvalidated inputs.', () => {
    //Arrange
    //cy.visit('http://localhost:5173/')
    //Act
    cy.get('[data-cy="password-input"]').type("1234")
    //Asset
    cy.get('[data-cy="submit-button"]').should("be disabled")  
  })

})
describe('Form inputs validated', () => {
  it('button enabled for validated inputs', () => {
    //Arrange
    //cy.visit('http://localhost:5173/')
    //Act
    cy.get('[data-cy="ad-input"]').type("emre")
    cy.get('[data-cy="soyad-input"]').type("şahiner")
    cy.get('[data-cy="email-input"]').type("emre@wit.com.tr")
    cy.get('[data-cy="password-input"]').type("1234Aa*")
    //Asset
    cy.get('[data-cy="submit-button"]').should("not.be.disabled")     
  })

})
})