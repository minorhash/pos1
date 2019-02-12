import React from "react";
import { render } from "react-dom";
import posed from "react-pose";
import styled from "styled-components";
import { tween } from "popmotion";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Square = posed.div({
  idle: {
    scale: 1,
    opacity: 0.1,
    transition: props => tween({ ...props, duration: 2000 })
  },
  hovered: {
    scale: 5,
    opacity: 1,
    transition: props => tween({ ...props, duration: 1000 })
  }
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

render(<App />, document.getElementById("fad"));
