import {Component, h} from "preact";

interface State {keyCount: number}

export class App extends Component<{a: string}, State> {

    state = { keyCount: 0};

    updateKeyCount = () => { this.setState((state: State) => ({keyCount: state.keyCount + 1}))};

  render() {
      console.log("render");
    return (
      <form id="example-form">
        First name:
        <br />
        <input type="text" name="firstname" onKeyDown={this.updateKeyCount}/>
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
