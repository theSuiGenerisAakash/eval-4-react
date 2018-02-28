import React, { Component } from 'react';
import './FirstPage.css';

class Header extends Component {
  render() {
    return (
      <div className="FirstPage">
        <div className="Row">
          <div className="Welcome">
            <span>Welcome</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to</span>
            <span className="Quizzy">Quizzy!</span>
          </div>
          <div className="Login">
            <p>Login</p>
            <br />
            <span className="Username">Username</span>
            <input type="text" className="LoginText" />
            <br />
            <button className="LoginButton">Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
