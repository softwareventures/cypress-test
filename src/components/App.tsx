import * as React from "react";

export class App extends React.Component {
  render() {
    return (
      <form id="example-form">
        First name:
        <br />
        <input type="text" name="firstname" />
        <br />
        Last name:
        <br />
        <input type="text" name="lastname" />
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    );
  }
}
