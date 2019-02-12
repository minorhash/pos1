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

const Square = posed.div(
config
);

const StyledSquare = styled(Square)`
  width: 100px;
  height: 100px;
  background: red;
`;

class App extends React.Component {

  render() {
    return (
      <Container>
        <StyledSquare
pose={this.state.hovered? 'on' : 'off'}

        />
      </Container>
    );
  }
}

render(<App />, document.getElementById("app"));

