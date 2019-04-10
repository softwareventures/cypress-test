import { App } from "../../src/components/App";
// @ts-ignore
import { mount } from "../support/cypress-preact-unit-test";
import {h} from "preact";

describe("component test", function() {
  it("tests single react component", function() {
    // mount(<App a="a" />);
    mount(<App a="a"/>, "MyApp");
    cy.get("[name=firstname]").type("John");
    cy.get("[name=lastname]").type("Doe");
    // cy.get("@App").its("attr").should("some chainer").contains("asfd");
  });
});
