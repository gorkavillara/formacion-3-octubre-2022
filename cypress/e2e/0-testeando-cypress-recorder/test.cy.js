it("Testeamos la funcionalidad de Cypress Recorder", () => {
  cy.visit("https://example.cypress.io/commands/actions");
  cy.get("#email1").click();
  cy.get("#email1").type("gorka@loquenecesites.com");
  cy.get(".action-disabled").click();
  cy.get(".action-disabled").click();
  cy.get(".action-disabled").click();
  cy.get(".action-disabled").click();
  cy.get("#password1").click();
  cy.get("#password1").type("39fj348f");
  cy.get(
    ".action-multiple-checkboxes > .checkbox:nth-child(2) > label"
  ).click();
  cy.get(".action-multiple-checkboxes > .checkbox:nth-child(2) input").click();
  cy.get(
    ".action-multiple-checkboxes > .checkbox:nth-child(1) > label"
  ).click();
  cy.get(".action-multiple-checkboxes > .checkbox:nth-child(1) input").click();
  cy.get(
    ".action-multiple-checkboxes > .checkbox:nth-child(3) > label"
  ).click();
  cy.get(".action-multiple-checkboxes > .checkbox:nth-child(3) input").click();
  cy.get(".action-select-multiple").type("fr-oranges");
  cy.get(".action-select-multiple > option:nth-child(2)").click();
  cy.get(".action-select-multiple").type("fr-oranges");
  cy.get(".action-select-multiple > option:nth-child(3)").click();
});
