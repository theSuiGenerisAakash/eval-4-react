import React, { Component } from 'react';
import './ShowScore.css';

class ShowScore extends Component {
  constructor(props){
    super(props);
    this.state = {
      topScorersInState: [],
    }
  }

  populateTopScorers = () => {
    const topScorers = [];
    fetch('/topusers/5')
      .then(res => res.json())
      .then(results => {
        results.result.forEach((result, idx) => {
          if(result.username === this.props.name){
          topScorers.push(<div className="Scorer-Orange">
            <div className="Ranking">{idx+1}</div>
            <div className="User">{result.username}</div>
          <div className="Score">{result.score}</div>
        </div>);
        } else {
        topScorers.push(<div className="Scorer">
          <div className="Ranking">{idx+1}</div>
          <div className="User">{result.username}</div>
          <div className="Score">{result.score}</div>
        </div>);
      }
     });
     this.setState({
       topScorersInState: topScorers,
     });
   });
  }

  componentDidMount(){
    this.populateTopScorers();
  }
  render() {
    return (
      <div className="ShowScore">
        <div className="YourScore">Your Score</div>
        <div className="Score">{this.props.score}
          <div className="TotalScore">/{this.props.totalScore}</div>
        </div>
        <br/><br/>
        <div className="Leaderboard">Leaderboard</div>
          {this.state.topScorersInState}
        <button className="PlayAgain" onClick={this.props.goBack}>Play Again</button>
      </div>
    );
  }
}

export default ShowScore;
