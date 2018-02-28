import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import FirstPage from './FirstPage/FirstPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  render() {
    return (
      <div className="App">
        <Header name={this.state.name} />
        <FirstPage />
      </div>
    );
  }
}

export default App;
