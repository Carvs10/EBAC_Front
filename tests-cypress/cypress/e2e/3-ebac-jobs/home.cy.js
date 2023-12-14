/// <reference types="cypress" />

describe("Testes para a home", () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
  });

  it("Should render 4 jobs", () => {
    cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 4);
  });

  it("Should filter by name fullstack", () => {
    cy.get(".FormVagas_campo__E1ppF").type("fullstack");
    cy.get("button[type='submit']").click();
    cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 1);
  });
});
