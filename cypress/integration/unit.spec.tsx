import { App } from "../../src/components/App";
import * as React from "react";
// @ts-ignore
import { mount } from "cypress-react-unit-test";

type mount = (element: JSX.Element) => void;

describe("component test", function() {
  it("tests single react component", function() {
    mount(<App />);
    cy.get("[name=firstname]").type("John");
    cy.get("[name=lastname]").type("Doe");
  });
});
