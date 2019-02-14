import React from "react";
import { render } from "react-dom";
import posed from "react-pose";
import styled from "styled-components";
import cnf from "./js/cnf.js"

const Container = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Square = posed.div(cnf);

const SSquare = styled(Square)`
width: 100px;
height: 100px;
background: red;
`;

class App extends React.Component {
  state = { hovering: false };

  render() {
    return (
      <Container>
        <SSquare
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        />
      </Container>
    );
  }
}

render(<App />, document.getElementById("act"));

