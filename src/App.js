import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster1: {
        name: 'Linda',
      },
      monster2: {
        name: 'Frank',
      },
      monster3: {
        name: 'Jacky',
      },
    };
  }
  render() {
    return <div className="App"></div>;
  }
}

export default App;
