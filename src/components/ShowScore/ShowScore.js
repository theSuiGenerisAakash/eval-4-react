import React, { Component } from 'react';
import './ShowScore.css';

class ShowScore extends Component {
  populateTopScorers = () => {
    const topScorers = [];
    fetch(`/topusers/5`)
      .then(res => res.json())
      .then(results => {
        results.result.forEach(result => {
          topScorers.push(<div className="Scorer">
            <div className="User">{result.username}</div>
          <div className="Score">{result.score}</div>
        </div>);
      });
        return topScorers;
    });
    return topScorers;
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
        {this.populateTopScorers()}
      </div>
    );
  }
}

export default ShowScore;
