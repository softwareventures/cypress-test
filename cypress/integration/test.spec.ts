describe("example test", function() {
  beforeEach(function() {
    cy.visit("/dist/");
  });

  it("runs example test", function() {
    const form = cy.get("#example-form");
    form.get("[name=firstname]").type("John");
    form.get("[name=lastname]").type("Doe");
    form.get("[name=submit]").click();
  });
});
