import { App } from "../../src/components/App";
// @ts-ignore
import { mount } from "../support/cypress-preact-unit-test";
import {Component, h} from "preact";

describe("component test", function() {
  it("tests single react component", function() {
    // mount(<App a="a" />);
    mount(<App a="a"/>, "MyApp");
    cy.get("[name=firstname]").type("John");
    cy.get("[name=lastname]").type("Doe");
    cy.get<Component>("@MyApp").its("state").should("deep.equal", {keyCount: 4});
  });
});
