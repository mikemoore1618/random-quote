import React, { Component } from 'react';
import data from './data.json'
import QuoteTable from './QuoteTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteTable data={data} />
      </div>
    );
  }
}

export default App;


/////GET IT TO DISPLAY RANDOM QUOTE