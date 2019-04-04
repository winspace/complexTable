import React from "react";
import { HotTable } from "@handsontable/react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      ["", "Tesla", "Mercedes", "Toyota", "Volvo"],
      ["2019", 10, 11, 12, 13],
      ["2020", 20, 11, 14, 13],
      ["2021", 30, 15, 12, 13]
    ];
  }

  render() {
    return (
      <HotTable
        data={this.data}
        colHeaders={true}
        rowHeaders={true}
        width={this.props.width}
        height={this.props.height}
      />
    );
  }
}
export default Table;
