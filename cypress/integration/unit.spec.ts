import { add } from "../../src/misc/add";
import { App } from "../../src/components/App";

describe("example unit test", function() {
  it("runs example unit test", function() {
    expect(add(2, 8)).to.equal(10);
    console.log(App);
  });
});
