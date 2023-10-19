import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '4545d4s5d4',
        },
        {
          name: 'Frank',
          id: '4545d4s5lll',
        },
        {
          name: 'Jacky',
          id: '4545mososo4',
        },
        {
          name: 'Andy',
          id: '4545d4s5l4d5d',
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
