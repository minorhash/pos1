import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

//const son={tit:"tit2"}

function Wel(props) {
return <div className="bg-warning">Hello, {props.name}</div>;
}

function  GetSon(props) {
return <div className="bg-info">Hello, {props.tit}</div>;
}

{/* class Wel extends React.Component { */}
{/* render() { */}
{/* return (<h4>Hello, {this.props.name}</h4>); */}
{/* } */}
{/* } */}

function App(){
return (
<div>
<GetSon tit />
<Wel name="Sara" />
<Wel name="Cahal" />
<Wel name="Edite" />
</div>
);
}

render(
<App />,
document.getElementById('fun')
);
