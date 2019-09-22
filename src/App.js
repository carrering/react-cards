import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
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
      tracks:[],
      searchField: ''
    };
  }
// Life Cycle method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // .then(users => console.log(users));
    .then(users => this.setState({ tracks:users }));
  }

  render() {
   // destructure - pull properties from an object and place in constant. 
    const {  tracks, searchField } = this.state;
    const filteredTracks = tracks.filter(track => 
      track.name.toLowerCase().includes(searchField.toLowerCase())
    );
     return (
      <div className="App">
      <SearchBox 
        placeholder = 'search' 
        handleChange = {e => 
          this.setState({ searchField: e.target.value}, () => console.log(this.state))}/>
      <CardList tracks={filteredTracks} 
      />
      </div>
    )
  }
}

export default App;
