import React from "react";
import { HotTable } from "@handsontable/react";

class ComTable extends React.Component {
  constructor(props) {
    super(props);
  }

  changeDate = e => {
    console.log(e);
  };
  render() {
    return (
      <HotTable
        settings={this.props.settings}
        afterChange={e => this.changeDate(e)}
      />
    );
  }
}
export default ComTable;
