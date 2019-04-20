import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import NameForm from './src/Nameform'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submittedValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({submittedValue: this.state.value});



  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to edit 
            Kuka siin gitis on???  testimarko dhg oksa gdfgfgd
            maken brancgh 
            jou miten tehää rivinvaihto <p>fsdf</p>
          </p>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
          <form onSubmit={this.handleSubmit}>
        <label>
          Kerro huolistasi: 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{this.state.submittedValue}</p>
        </header>
      </div>
      
    );

    /*var data; 
    var jsonData = require('./dump04700-04799.json');

    function loadJSON(jsonfile, callback) {   

        var jsonObj = new XMLHttpRequest();
        jsonObj.overrideMimeType("App/json");
        jsonObj.open('GET', "App.js/dump04700-04799.json", true);
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
