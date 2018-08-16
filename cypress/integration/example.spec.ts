describe("example 1", function() {
  beforeEach(function() {
    cy.visit("/dist/");
  });
  it("gets example form", function() {
    cy.get("#example-form");
  });
});
