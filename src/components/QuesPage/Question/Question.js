import React, { Component } from 'react';
import './Question.css';
const ur = require('unique-random')(1000,100000);

class Question extends Component {
  populateOptions = (options, idx) => {
    const optionArr = [];
    options.forEach((opt) => {
      const optValue = opt.split('+').pop();
      const optId = idx + opt.split('+')[0];;
      optionArr.push(<div className="Option"><input type="radio" name={idx} id={optId} key={ur()} value={optValue}/>&nbsp;
<label key={ur()}>{optValue}</label></div>);
    });
    return optionArr;
  }
  render() {
    return (
      <div className="Question">
        <div className="QuestionNo">{`Question ${this.props.number}`}</div>
        <div className="QuestionName">{this.props.name}</div>
        <div className="Options">{this.populateOptions(this.props.options, this.props.number)}</div>
      </div>
    );
  }
}

export default Question;
