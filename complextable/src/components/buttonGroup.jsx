import React, { Component } from "react";
import { Col, Switch, InputNumber, Row, Input, Modal, Button } from "antd";
import RowHeader from "./smallIcon/rowHeader";
import ColHeader from "./smallIcon/colHeader";
import FillDate from "./smallIcon/fillDate";
class ButtonGroup extends Component {
  state = {
    newVisible: false,
    newRow: null,
    newCol: null
  };
  handleNewOk = () => {
    this.setState({
      newVisible: false
    });
    this.props.createNewTable(this.state.newRow, this.state.newCol);
  };
  handleNewCancel = () => {
    this.setState({
      newVisible: false
    });
  };
  showNewPanel = () => {
    this.setState({
      newVisible: true
    });
  };
  render() {
    return (
      <React.Fragment>
        <Modal
          title="Basic Modal"
          visible={this.state.newVisible}
          onOk={this.handleNewOk}
          onCancel={this.handleNewCancel}
        >
          <Row>
            <Col span={11}>
              <InputNumber
                style={{ width: "150px" }}
                placeholder="请输入行数"
                value={this.state.newRow}
                onChange={e => {
                  this.setState({
                    newRow: e
                  });
                }}
              />
            </Col>
            <Col span={2} />
            <Col span={11}>
              <InputNumber
                style={{ width: "150px" }}
                placeholder="请输入列数"
                value={this.state.newCol}
                onChange={e => {
                  this.setState({
                    newCol: e
                  });
                }}
              />
            </Col>
          </Row>
        </Modal>
        <Row style={{ background: "rgba(232,232,232)" }}>
          <Col span={1}>
            <Button type="primary" onClick={this.showNewPanel}>
              新建
            </Button>
          </Col>
          <Col span={2}>
            <RowHeader
              toggleRowHeader={this.props.toggleRowHeader}
              settings={this.props.settings}
            />
            <ColHeader
              toggleColHeader={this.props.toggleColHeader}
              settings={this.props.settings}
            />
            <FillDate settings={this.props.settings} fillDataFull = {this.props.fillDataFull}/>
          </Col>
          <Col span={1} >
          
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ButtonGroup;
