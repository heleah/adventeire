/* eslint-disable no-undef */

/// <reference types='Cypress' />

const testId = (id) => `[data-test-id="${id}"]`;
const SEARCH_BAR = testId('search-bar');
const SEARCH_RESULT = testId('search-result');

describe('Search for sights', () => {
  it('returns search results', () => {
    cy.visit('/sights');
    cy.get(SEARCH_BAR).type('irish');
    cy.get(SEARCH_RESULT).should('have.length', 2);
  });
});
