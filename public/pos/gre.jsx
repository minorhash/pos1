import React from "react";
import { render } from "react-dom";
import posed from "react-pose";
import styled from "styled-components";
import { progress } from '@popmotion/popcorn';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//progress(100, -100, 50); // 0.25

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
});

const StyledSquare = styled(Square)`
  width: 100px;
  height: 100px;
  background: red;
`;

class App extends React.Component {
  state = { hovering: false };

  render() {
    return (
      <Container>
        <StyledSquare
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        />
      </Container>
    );
  }
}

render(<App />, document.getElementById("app"));

