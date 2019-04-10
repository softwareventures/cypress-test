import {Component, h} from "preact";

export class App extends Component {
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
        <br />
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    );
  }
}
