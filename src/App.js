import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        firstName: 'Alejandro',
        lastName: 'Quezada',
      },
      company: 'Nile Devs',
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, {this.state.name.firstName} {this.state.name.lastName}, I work
            at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(() => {
                return {
                  name: {
                    firstName: 'Julio',
                    lastName: 'Rodriguez',
                  },
                };
              });
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
