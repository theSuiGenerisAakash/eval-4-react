import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import FirstPage from './FirstPage/FirstPage';
import QuesPage from './QuesPage/QuesPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      layout: 0,
      questions: [],
      answers: [],
      score: 0,
    };
  }
  componentDidMount() {
    fetch('/questions').then(response => response.json()).then((resJSON) => {
      if (resJSON.statusCode === 204) {
        fetch('/store').then(response => response.json()).then((resStore) => {
          this.setState({
            questions: resStore.resultBulkCreate,
          });
        });
      } else {
        this.setState({
          questions: resJSON.results,
        });
      }
    });
  }
  login = (value) => {
    fetch(`/user/${value}`).then(res => res.json()).then(resJSON => {
      if(resJSON.statusCode === 204) {
        this.setState({
          layout: 1,
          name: `Hello ${value}`,
        });
      } else {
        this.setState({
          name: `Hello ${value}`,
          answers: resJSON.choices,
          score: resJSON.score,
        });
      }
    });
  }
  render() {
    if (this.state.layout === 0) {
      return (
        <div className="App">
          <Header name={this.state.name} />
          <FirstPage login={this.login} />
        </div>
      );
    } else if (this.state.layout === 1) {
      return (
        <div className="App">
          <Header name={this.state.name} />
          <QuesPage questions={this.state.questions} />
        </div>
      );
    }
  }
}

export default App;
