import React, { Component } from 'react';
import './Question.css';
const ur = require('unique-random')(1000,100000);

class Question extends Component {
  setOption(event) {
    this.props.select(this.props.quesID, event.target.value);
  }
  populateOptions = (options, idx) => {
    const optionArr = [];
    options.forEach((opt) => {
      const optValue = opt.split('+').pop();
      const optId = idx + opt.split('+')[0];;
      optionArr.push(<div className="Option" key={ur()}>
        <input type="radio" name={idx} id={optId} value={optValue}/>
        &nbsp;<label key={ur()}>{optValue}</label>
      </div>);
    });
    return optionArr;
  }
  render() {
    return (
      <div className="Question">
        <div className="QuestionNo">{`Question ${this.props.number}`}</div>
        <div className="QuestionName">{this.props.name}</div>
        <div className="Options" onChange={event => this.setOption(event)}>{this.populateOptions(this.props.options, this.props.number)}</div>
      </div>
    );
  }
}

export default Question;
