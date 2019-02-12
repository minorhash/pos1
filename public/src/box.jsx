import React from "react";
import { render } from "react-dom";
import posed from "react-pose";
import styled from "styled-components";


const config = {
  off: {
    opacity: 0.5,
    scale: 1
  },
  on: {
    opacity: 1,
    scale: 2
  }
};

const Box = posed.div(config);

class App extends React.Component {

  render() {
    return (
      <div>
          <Box pose={this.state.hovered ? "on" : "off"} />
      </div>
    );
  }
}

render(<App />, document.getElementById("box"));

