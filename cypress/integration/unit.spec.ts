import * as React from "react";
import { App } from "../../src/components/App";

describe("example unit test", function() {
  it("runs example unit test", function() {
    expect(App.prototype.constructor).to.equal(React.Component);
  });
});
