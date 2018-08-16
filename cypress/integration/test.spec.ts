describe("example test", function() {
  beforeEach(function() {
    cy.visit("/");
  });

  afterEach(function() {
    cy.screenshot();
  });

  it("runs example test", function() {
    cy.get("[name=firstname]").type("John");
    cy.get("[name=lastname]").type("Doe");
    cy.get("[name=submit]").click();
  });
});
