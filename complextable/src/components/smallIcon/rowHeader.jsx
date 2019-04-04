import React, { Component } from "react";
import { Button } from "antd";
import imgRowHeader from "../../img/row.png";
class RowHeader extends Component {
  constructor(props) {
    super(props);
  }
  initRowHeader = () => {
    if (this.props.settings.rowHeaders == true) {
      return {
        background: "url(" + imgRowHeader + ")",
        backgroundSize: "cover",
        border: "none",
        backgroundColor: "rgb(186,186,186)"
      };
    } else {
      return {
        background: "url(" + imgRowHeader + ")",
        backgroundSize: "cover",
        border: "none",
        backgroundColor: "#ddd"
      };
    }
  };

  render() {
    return (
      <Button
        onClick={this.props.toggleRowHeader}
        style={this.initRowHeader()}
      />
    );
  }
}

export default RowHeader;
