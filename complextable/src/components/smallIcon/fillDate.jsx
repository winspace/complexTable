import React, { Component } from "react";
import { Button } from "antd";
import imgColHeader from "../../img/data.png";
class FillDate extends Component {
  constructor(props) {
    super(props);
  }
  initButton = () => {
    
      return {
        background: "url(" + imgColHeader + ")",
        backgroundSize: "cover",
        border: "none",
        backgroundColor: "#ddd"
      }
    
  };

  render() {
    return (
      <Button
        onClick={this.props.fillDataFull}
        style={{ ...this.initButton(), ...{ marginLeft: "10px" } }}
      />
    );
  }
}

export default FillDate;
