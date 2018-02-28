import React, { Component } from 'react';
import './QuesPage.css';
import Question from './Question/Question';
const ur = require('unique-random')(1,999);

class QuesPage extends Component {
  populate = (questions) => {
    const quesArr = [];
    questions.forEach((que, idx) => {
      quesArr.push(<Question name={que.question} number={idx+1} options={que.options} key={ur()} />);
    });
    return quesArr;
  }
  render() {
    return (
      <div className="QuesPage">
        {this.populate(this.props.questions)}
      </div>
    );
  }
}

export default QuesPage;
