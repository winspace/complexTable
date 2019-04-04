import React, { Component } from "react";
import "./App.css";
import TableContainer from "./components/tableContainer";
import "antd/dist/antd.css";

class App extends Component {
  state = {
    settings: {
      data: null,
      colHeaders: true,
      rowHeaders: true,
      width: "100%",
      height: "500",
      startRows: 0,
      startCols: 0
    }
  };
  createNewTable = (a, b) => {
    const tempSetting = this.state.settings;
    tempSetting.startRows = a;
    tempSetting.startCols = b;

    this.setState({
      settings: tempSetting
    });
  };

  toggleRowHeader = () => {
    const tempSetting = this.state.settings;

    tempSetting.rowHeaders = !this.state.settings.rowHeaders;
    console.log(tempSetting.rowHeaders);
    this.setState({
      settings: tempSetting
    });
  };

  toggleColHeader = () => {
    const tempSetting = this.state.settings;
    tempSetting.colHeaders = !this.state.settings.colHeaders;
    console.log(tempSetting.colHeaders);
    this.setState({
      settings: tempSetting
    });
  };

  render() {
    return (
      <div className="App">
        <TableContainer
          settings={this.state.settings}
          createNewTable={this.createNewTable}
          toggleRowHeader={this.toggleRowHeader}
          toggleColHeader={this.toggleColHeader}
        />
      </div>
    );
  }
}

export default App;
