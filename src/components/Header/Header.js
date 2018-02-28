import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">Quizzy
        <span className="Hello">{this.props.name}</span>
      </div>
    );
  }
}

export default Header;
