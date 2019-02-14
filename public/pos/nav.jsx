const cnf={
idle: {
scale: 1,
opacity: 0,
transition: props => tween({ props, duration: 2000 })
},
hov: {
scale: 5,
opacity: 1,
transition: props => tween({ props, duration: 1000 })
}
}

import React from "react";
import { render } from "react-dom";
import posed from "react-pose";
import styled from "styled-components";
import { tween } from "popmotion";
//import conf from "./conf"

const Container = styled.nav`
height: 200px;
display: flex;
align-items: center;
justify-content: center;
background: lightgreen;
`;

const Square = posed.nav(cnf);

const StyledSquare = styled(Square)`
width: 200px;
height: 50px;
background: red;
`;

class App extends React.Component {
state = { hovering: false };

  render() {
    return (
      <Container>
        <StyledSquare
          pose={this.state.hovering ? "hov" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        />
      </Container>
    );
  }
}

render(<App />, document.getElementById("nav"));
