/* eslint-disable no-undef */

/// <reference types='Cypress' />

const testId = (id) => `[data-test-id="${id}"]`;
const SHAMROCK = testId('shamrock');
const FAVORITES = testId('favorite-sight');

describe('Add sight to favorites', () => {
  it('adds a sight on the sights page to the favorites page', () => {
    cy.visit('/sights');
    cy.get(SHAMROCK).first().click();
    cy.visit('/favorites');
    cy.get(FAVORITES).should('have.length', 1);
  });
});
