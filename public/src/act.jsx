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

const Square = posed.div({
x: -10,
  y: -10,
  background: 'rgba(161, 0, 246, 1)',
  boxShadow: '10px 10px 20px rgba(161, 0, 246, 0.2)',
  transition: { duration: 700 }
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
        />
      </Container>
    );
  }
}

render(<App />, document.getElementById("app"));

