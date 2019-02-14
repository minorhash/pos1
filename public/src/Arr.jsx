import React from "react"

class Arr extends React.Component {
constructor() {
super();
this.state = {
data: [
{"id":1,
"name":"Foo",
"age":"20"},
{"id":2,
"name":"Bar",
"age":"30"}
]
}
}

render() {
return (
<div className="container-fluid">
this is Head. 
<table><tbody>
{
this.state.data.map(
(person, i) => <TableRow key={i} data={person} />
)
}
</tbody></table>
</div>
);
}
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default Arr
