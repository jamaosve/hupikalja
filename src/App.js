import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import NameForm from './src/Nameform'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value.includes("testi")) {
        
    alert('Kysymyksesi: ' + this.state.value + '?');
    }
    event.preventDefault();

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
      <p>label.this.state.value</p>


      

        </header>
      </div>
      
    );
  }
}

export default App;
