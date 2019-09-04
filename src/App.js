import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello Jim Chambers',
      // tracks: [
      //   {
      //     name: 'Nurburgring',
      //     id: '001'
      //   },
      //   {
      //     name: 'Bugatti',
      //     id: '002'
      //   },
      //   {
      //     name: 'Spa',
      //     id: '003'
      //   },
      // ],
      tracks:[]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // .then(users => console.log(users));
    .then(users => this.setState({ tracks:users }));
  }

  render() {
    return (
      <div className="App">
      <CardList tracks={this.state.tracks}>

      </CardList>

      </div>
    )
  }
}

export default App;
