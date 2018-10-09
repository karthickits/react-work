import React from "react";

class TableApp extends React.Component {
  render() {
    const listing = [{ id: "100", dept: "CS" }, { id: "200", dept: "ECE" }];
    const list = listing.map((element, index) => {
      return (
        <tr>
          <td>{element.id}</td>
          <td>{element.dept}</td>
        </tr>
      );
    });
    return (
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Dept</th>
          </tr>
          {list}
        </tbody>
      </table>
    );
  }
}
export default TableApp;
