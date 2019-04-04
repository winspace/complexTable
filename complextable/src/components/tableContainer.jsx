import React, { Component } from "react";
import ButtonGroup from "./buttonGroup";
import ComTable from "./comtable";
import { Alert } from "antd";
class TableContainer extends Component {
  constructor(props) {
    super(props);
  }
  //条件判断
  initComTable = () => {
    if (this.props.settings.startRows == 0) {
      return (
        <div>
          <Alert message="请新建表格" type="warning" />
        </div>
      );
    } else {
      return <ComTable settings={this.props.settings} />;
    }
  };
  render() {
    return (
      <React.Fragment>
        <ButtonGroup
          toggleColHeader={this.props.toggleColHeader}
          toggleRowHeader={this.props.toggleRowHeader}
          createNewTable={this.props.createNewTable}
          settings={this.props.settings}
        />
        {this.initComTable()}
      </React.Fragment>
    );
  }
}

export default TableContainer;
