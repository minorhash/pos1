const conf={
top: {y: 50},
bottom: {y: 300}
}

import React from "react";
import { render } from "react-dom";
import posed from "react-pose";
import styled from "styled-components";

const Container = styled.div`
height: 300px;
display: flex;
align-items: center;
justify-content: center;
`;

const Box= posed.div(conf);

const SBox= styled(Box)`
position:absolute;
background: red;
`;

class App extends React.Component {
  state = { hovering: false };

  render() {
    return (
      <Container>
        <SBox
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        />
      </Container>
    );
  }
}

render(<App />, document.getElementById("box"));

