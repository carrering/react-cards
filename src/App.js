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

    //need to bind context of this in constructor without an arrow function
    //this.handleChange = this.handleChange.bind(this);
  }
// Life Cycle methods
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // .then(users => console.log(users));
    .then(users => this.setState({ tracks:users }));
  }
  // if using this then need to bind in constructor
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }

  //es6 arrow function with lexicle scoping. includes bind implicitly
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
    console.log(e.target.value);
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
        handleChange = {this.handleChange}/>
      <CardList tracks={filteredTracks} 
      />
      </div>
    )
  }
}

export default App;
