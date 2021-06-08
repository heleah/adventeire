/* eslint-disable no-undef */
/// <reference types='Cypress'/>;

describe('Use Navigation', () => {
  it('Visits the Landing Page', () => {
    cy.visit('/');
  });

  it('changes to Sights page', () => {
    cy.visit('/');
    cy.get('[href="/sights"]').click();
    cy.get('h2').contains('All Sights');
  });

  it('changes to Favorites page', () => {
    cy.visit('/');
    cy.get('[href="/favorites"]').click();
    cy.get('h2').contains('Favorites');
  });
});
