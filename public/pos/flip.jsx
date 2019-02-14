const pose={
  fullscreen: {
    width: "100vw",
    height: "100vh",
    transition: tween
},
  idle: {
    width: 100,
    height: 100,
    transition: tween
}
}

import React from "react";
import { render } from "react-dom";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import { tween } from "popmotion";

const Container = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.button`
  top: 0;
  left: 0;
  position: absolute;
`;

const Square = posed.div(pose);

const StyledSquare = styled(Square)`
  background: red;
`;

const ItemList = ({ items }) => (
  <ul>
    <PoseGroup>
      {items.map(item => <StyledItem key={item.id}>{item.text}</StyledItem>)}
    </PoseGroup>
  </ul>
);

class App extends React.Component {
  state = {
    active: false
  };

  render() {
    return (
      <Container>
        <StyledSquare
          pose={this.state.active ? "fullscreen" : "idle"}
          onClick={() => this.setState({ active: true })}
        />
        {this.state.active && (
          <Btn className="btn btn-warning" type="button" onClick={() => this.setState({ active: false })}>
            Close!
          </Btn>
        )}
      </Container>
    );
  }
}

render(<App />, document.getElementById("flip"));
