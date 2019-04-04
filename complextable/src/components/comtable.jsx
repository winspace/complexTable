import React from "react";
import { HotTable } from "@handsontable/react";

class ComTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HotTable settings={this.props.settings} />;
  }
}
export default ComTable;
