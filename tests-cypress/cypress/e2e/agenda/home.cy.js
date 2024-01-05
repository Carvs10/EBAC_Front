/// <reference types="cypress" />

describe("Testing for contacts", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Should include a contact at the list", () => {
    cy.get("input[type='text']").type("Joao Victtor");
    cy.get("input[type='email']").type("cjoaovicttor@gmail.com");
    cy.get("input[type='tel']").type("84994310226");
    cy.get("button[type='submit']").click();
    cy.get("h2").should("have.text", "4 contatos na agenda");
  });

  it("Should edit contact info", () => {
    cy.get(":nth-child(5) > .sc-gueYoa > .edit").click();
    cy.get("input[type='email']").clear();
    cy.get("input[type='email']").type("joaovcl10@hotmail.com");
    cy.get("input[type='tel']").clear();
    cy.get("input[type='tel']").type("84991048976");
    cy.get(".alterar").click();

    cy.get(":nth-child(5) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)").should(
      "have.text",
      "84991048976"
    );
    cy.get(":nth-child(5) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)").should(
      "have.text",
      "joaovcl10@hotmail.com"
    );
  });

  it("Should delete a contact,", () => {
    cy.get(":nth-child(5) > .sc-gueYoa > .delete").click();
    cy.get(".sc-iAEyYk > :nth-child(5)").should("not.exist");
  });
});
