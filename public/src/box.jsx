import React from "react";
import { render } from "react-dom";
import posed from "react-pose";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box= posed.div({
left: { x: -100 },
  right: { x: 100 }
});

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
<Box pose={position} />
        />
      </Container>
    );
  }
}

const Comp= ({ position }) =>
<Box pose={position} />

render(<App />, document.getElementById("box"));

