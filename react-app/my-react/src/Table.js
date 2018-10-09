import React from "react";

function Table(props) {
  const list = props.children.map((key, value) => {
    return (
      <tr>
        <th>{key}</th>
        <th>{value}</th>
      </tr>
    );
  });
  
}

export default Table;
