import React from "react";
import ReactDOM from "react-dom";
import posed from "react-pose";

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
  state = {
    hovered: false
  };

  handleMouseEnter = () => {
    this.setState({
      hovered: true
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hovered: false
    });
  };

  render() {
    return (
      <div >
        <Box
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          pose={this.state.hovered ? "on" : "off"}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("hov"));
