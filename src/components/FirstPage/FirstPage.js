import React, { Component } from 'react';
import './FirstPage.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (event) =>{
    this.setState({ value: event.target.value });
  }
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
            <input
              type="text"
              className="LoginText"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
            <button
              className="LoginButton"
              onClick={() => this.props.login(this.state.value)}
            >
                Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
