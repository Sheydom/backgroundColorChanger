context("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
  });

  it("should change color to red", () => {
    //happy path
    cy.wait(1000);
    cy.get("#dropdown1").select("red").should("have.value", "red");
    cy.wait(1000);
    cy.get("#dropdown1").select("yellow").should("have.value", "yellow");
  });

  it("should alarm error", () => {
    cy.wait(1000);
    cy.get("#dropdown1").select("green").should("have.value", "green");
    cy.wait(1000);
    cy.get("#dropdown2").select("green");
    cy.on("window:alert", (alertText) => {
      expect(alertText);
    });
  });
});
