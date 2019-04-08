import React, { Component } from "react";
import "./App.css";
import TableContainer from "./components/tableContainer";
import "antd/dist/antd.css";
import Handsontable from "handsontable";
import { Col } from "antd";

class App extends Component {
  state = {
    settings: {
      data: null,
      colHeaders: false,
      rowHeaders: false,
      width: "100%",
      height: "500",
      comments: true,
      startRows: 0,
      currentRowClassName: "currentRow",
      currentColClassName: "currentCol",
      startCols: 0,
      columnSorting: true,
      manualColumnFreeze: true,
      fixedColumnsLeft: 2,
      manualRowMove: true,
      search: true,
      cell: [{ row: 1, col: 1, comment: { value: "Hello world!" } }],
      mergeCells: [
        { row: 1, col: 1, rowspan: 3, colspan: 3 },
        { row: 3, col: 4, rowspan: 2, colspan: 2 },
        { row: 5, col: 6, rowspan: 3, colspan: 3 }
      ],
      dropdownMenu: true,
      filters: true,
      bindRowsWithHeaders: "strict",
      customBorders: [
        {
          range: {
            from: {
              row: 1,
              col: 1
            },
            to: {
              row: 3,
              col: 4
            }
          },
          top: {
            width: 2,
            color: "#5292F7"
          },
          left: {
            width: 2,
            color: "orange"
          },
          bottom: {
            width: 2,
            color: "red"
          },
          right: {
            width: 2,
            color: "magenta"
          }
        },
        {
          row: 2,
          col: 2,
          left: {
            width: 2,
            color: "red"
          },
          right: {
            width: 1,
            color: "green"
          }
        }
      ],
      contextMenu: {
        //https://handsontable.com/docs/7.0.0/demo-context-menu.html?_ga=2.206387603.1212794906.1554629973-1787957690.1553829183#page-default
        items: {
          row_above: {
            name: "上方插入一行"
          },
          row_below: {
            name: "下方插入一行"
          },
          col_left: {
            name: "左侧插入一列"
          },
          col_right: {
            name: "右侧插入一列"
          },
          remove_row: {
            name: "删除行"
          },
          remove_col: {
            name: "删除列"
          },
          clear_column: {
            name: "清空列"
          },
          make_read_only: {
            name: "设为只读"
          },
          alignment: {
            name: "对齐"
          },
          freeze_column: {
            name: "冻结"
          },
          unfreeze_column: {
            name: "解冻"
          },
          borders: {
            name: "边框"
          },
          mergeCells: {
            name: "合并单元格"
          },
          // row_below: {
          //   name: "Insert row above this one (custom name)"
          // },
          separator: Handsontable.plugins.ContextMenu.SEPARATOR,
          clear_custom: {
            name: "清除数据",
            callback: function() {
              this.clear();
            }
          }
        }
      }
    },
    rows: null,
    cols: null
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
  fillDataFull = () => {
    const tempSetting = this.state.settings;

    tempSetting.data = Handsontable.helper.createSpreadsheetData(
      tempSetting.startRows,
      tempSetting.startCols
    );
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
          fillDataFull={this.fillDataFull}
        />
      </div>
    );
  }
}

export default App;
