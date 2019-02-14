import React from "react";
import {render} from "react-dom";
import ReactDOM from "react-dom";

function Wel(props) {
  return <h1>Hello, {props.name}</h1>;
}

const el= <Wel name="Sara" />;

render(el, document.getElementById('root'));



