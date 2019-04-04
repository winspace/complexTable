import React, { Component } from "react";
import { Button } from "antd";
import imgColHeader from "../../img/col.png";
class ColHeader extends Component {
  constructor(props) {
    super(props);
  }
  initColHeader = () => {
    if (this.props.settings.colHeaders == true) {
      return {
        background: "url(" + imgColHeader + ")",
        backgroundSize: "cover",
        border: "none",
        backgroundColor: "rgb(186,186,186)"
      };
    } else {
      return {
        background: "url(" + imgColHeader + ")",
        backgroundSize: "cover",
        border: "none",
        backgroundColor: "#ddd"
      };
    }
  };

  render() {
    return (
      <Button
        onClick={this.props.toggleColHeader}
        style={{ ...this.initColHeader(), ...{ marginLeft: "10px" } }}
      />
    );
  }
}

export default ColHeader;
