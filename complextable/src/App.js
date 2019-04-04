import React, { Component } from "react";
import "./App.css";
import Table from "./components/table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table width={window.screen.width} height={window.screen.height} />
      </div>
    );
  }
}

export default App;
