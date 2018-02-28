import React, { Component } from 'react';
import './QuesPage.css';
import Question from './Question/Question';
const ur = require('unique-random')(1,999);

class QuesPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      questionsAttempted: [],
    }
  }
  select = (id, value) => {
    const newElem = `${id}+${value}`;
    let checkArr = [];
    if(this.state.questionsAttempted.length === 0){
      checkArr.push(newElem);
    } else {
      console.log(this.state.questionsAttempted.length);
    for(let i=0; i< this.state.questionsAttempted.length; i++){
      if(parseInt(this.state.questionsAttempted[i].split('+')[0]) !== id){
        checkArr.push(this.state.questionsAttempted[i]);
      }
    }
    checkArr.push(newElem);
    console.log(checkArr);
  }
    this.setState({
      questionsAttempted: [...checkArr],
    });
  }

  calculateScore = () => {
    const userObj ={
     username: this.props.name,
     choices: this.state.questionsAttempted,
   }
    fetch('/calculate',{
      method: 'POST',
      body: JSON.stringify(userObj)
    }).then(res => res.json()).then((response) => {
      console.log(response.score);
      this.props.showScore(response.score);
    });
  }
  checkAllSelected = () => {
    if(this.state.questionsAttempted.length === this.props.questions.length) {
      this.calculateScore();
    }
  }
  populate = (questions) => {
    const quesArr = [];
    questions.forEach((que, idx) => {
      quesArr.push(<Question name={que.question} number={idx+1} options={que.options} key={ur()} select={this.select} quesID={que.quesID}/>);
    });
    return quesArr;
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <div className="QuesPage">
        {this.populate(this.props.questions)}
        <button className="Submit" onClick={() => this.checkAllSelected()}>Calculate</button>
      </div>
    );
  }
}

export default QuesPage;
