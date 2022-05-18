/// <reference types="Cypress" />
import { Given, Then} from 'cypress-cucumber-preprocessor/steps';
import {baseUrl} from '../../../cypress.json';

Given (/^I navigate to (.*)$/, (page) => {
    cy.visit(`${baseUrl}${page}`);
});

Then(/^I verify (.*?) and (.*) load$/, (page, selector) => {
    cy.url().should('include', `${page}`);
    // cy.intercept('POST', `${page}`).as('post');
    // cy.get('@post').then((resp) => {
    //     console.log(resp);
    //       expect(resp.status).not.to.eq(500);
    //   })
    cy.get(`${selector}`).should('be.visible');
});

Then(/^I verify console errors do not appear$/, () => {
    cy.window().then((win) => {
        console.log(win);
        expect(win.console.error.length).to.eq(0);
     });
});

Then(/^I verify error page$/, () => {
   cy.url().should('include', 'badpage');
   cy.get('.title').should('be.visible').and('contain', 'Document not found');
});
