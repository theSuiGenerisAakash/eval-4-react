import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import FirstPage from './FirstPage/FirstPage';
import QuesPage from './QuesPage/QuesPage';
import ShowScore from './ShowScore/ShowScore';

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
    if(value==='')
      return;
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
          layout: 1,
          score: resJSON.score,
        });
      }
    });
  }

  showScore = (score) => {
    this.setState({
      score: score,
      layout: 2,
    });
  }

  goBack = () => {
    this.setState({
      score: 0,
      name: '',
      answers: '',
      layout: 0,
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
          <QuesPage questions={this.state.questions} name={this.state.name} showScore={this.showScore}/>
        </div>
      );
    } else if (this.state.layout === 2) {
      return (
        <div className="App">
          <Header name={this.state.name} />
          <ShowScore score={this.state.score} totalScore={this.state.questions.length} goBack={this.goBack}/>
        </div>
      );
    }
  }
}

export default App;
