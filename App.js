import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      size: ""
    };
  }

  getInfo = () => {
    var x = document.getElementById("myFile");
    this.setState({
      name: x.files[0].name,
      size: x.files[0].size
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const file = {
      name: this.state.name,
      size: this.state.size
    };

    axios.post("/upload", file).then(res => console.log(res.data));
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input
            type="file"
            name="upfile"
            id="myFile"
            onChange={this.getInfo}
          ></input>
          <input type="submit" value="Upload" id="uploadBtn" />
        </form>
        <p>Name: {this.state.name} </p>
        <p>Bytes: {this.state.size}</p>
      </div>
    );
  }
}

export default App;
