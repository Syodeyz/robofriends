import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBar from '../components/SearchBar';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  
  /**
  * a method that gives the current value of the searchfield onChange.
  * @returns string typed in searchfield
  */
  
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({robots: users})});
  }
  
  
  
  render(){
    const {robots, searchField} = this.state; 
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    
    return !robots.length ? 
      <h1>Loading your RoboFriends</h1> : 
      (
        <div className="App tc">
          <h1>RoboFriends</h1>
          <SearchBar searchChange={ this.onSearchChange }/>
          <Scroll>
          <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      )
    }
  }
  
  export default App;
  