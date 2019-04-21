import React, { Component } from "react";
import logo from "./s24.png";
import "./App.css";
import jsondata from "./testidatapienin.json";
// import NameForm from './src/Nameform'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      submittedValue: "",
      data: jsondata.data
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submittedValue: this.state.value });
  }

  render() {
    //var data = require('./testidata (1).json'); // forward slashes will depend on the file location
    var data = this.state.data;
    for (var i = 0; i < data.length; i++) {
      var obj = data[i];
      console.log("Testi: " + obj.body);
    }
    
    //var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem = data[Math.floor(Math.random() * data.length)];
    console.log("RENDER", randomItem);
    //document.body.innerHTML = randomItem;

    console.log(data);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ fontSize: "10px" }}>
            Edit <code>src/App.js</code> and save to edit Kuka siin gitis on???
            testimarko dhg oksa gdfgfgd maken brancgh jou miten tehää
            rivinvaihto <p>fsdf</p>
          </p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Kerro huolistasi:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <p>{this.state.submittedValue}</p>
          <p>
            {randomItem.body}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          
        </header>
      </div>
    );

    /*var data = require('./testidata (1).json'); // forward slashes will depend on the file location

    for(var i = 0; i < data.length; i++) {
        var obj = data[i];
    
        console.log("Testi: " + obj.body);
    }*/

    /*var data; 
    var jsonData = require('./testidata (1).json');

    function loadJSON(jsonfile, callback) {   

        var jsonObj = new XMLHttpRequest();
        jsonObj.overrideMimeType("App/json");
        jsonObj.open('GET', "App.js/testidata (1).json", true);
        jsonObj.onreadystatechange = function () {
              if (jsonObj.readyState == 4 && jsonObj.status == "200") {
                callback(jsonObj.responseText);
              }
        };
        jsonObj.send(null);  
     }

    function load() {

        loadJSON(jsonData, function(response) {
            data = JSON.parse(response);
            console.log(data);
        });
    }

    load();*/
  }
}

export default App;
