import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <div>
        <Button primary>{this.props.tes}</Button>
      </div>
    );
  }
}

const stateApps = (state) => {
  return {
    tes: state.tes,
  };
};
export default connect(stateApps)(App);
