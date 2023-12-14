/// <reference types="cypress" />

describe("Testes para a pagina de vagas", () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
  });
  it("Should navigate for page", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
    cy.get("input").should("have.length", 7);
    cy.screenshot("tela-inscircao");
  });

  it("Should fill the form", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();

    cy.get('input[name="nome-completo"]').type("João Victtor");
    cy.get('input[name="email"]').type("joaovcl10@hotmail.com");
    cy.get('input[name="telefone"]').type("11 12345678");
    cy.get('input[name="endereco"]').type("Rua Currais Novos, 110");

    cy.get("#linux").check();
    cy.get('select[name="escolaridade"]').select("bacharelado");

    cy.get(".Aplicacao_button__tw2AE").click();

    cy.on("window:alert", (content) => {
      expect(content).contain("Obrigado pela candidatura!");
    });

    cy.screenshot("tela-inscricao-preenchido");
  });
});
