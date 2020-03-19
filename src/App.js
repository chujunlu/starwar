import React from 'react';
import BasicInfo from "./components/BasicInfo";
import { readJSON } from './assets/utilities';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      showBasic: false,
    };
  }

  componentDidMount() {
    // First time the component mounts, retrive data and store it
    // in localStorage.
    if (!localStorage.getItem('starWarsPeople')) {
      const result = readJSON('https://swapi.co/api/people');
      localStorage.setItem('starWarsPeople', result);
    }
  }

  updateInput(event) {
    this.setState({input: event.target.value, showBasic: false});
  }

  handleSearch() {
    const val = this.state.input.trim();

    if (val !== '') {
      this.setState({input: val, showBasic: true});
    }
  }

  render() {
    let starWarsPeople = undefined;
    if (localStorage.getItem('starWarsPeople')) {
      starWarsPeople = JSON.parse(localStorage.getItem('starWarsPeople')).results;
    }

    return(
      <div>
        <header className="header">
          <h1>Star Wars</h1>
          <input
            className="inputBox"
            placeholder="Type in a name"
            value={this.state.input}
            onChange={this.updateInput.bind(this)}
            autoFocus={true}
          />
          <button onClick={this.handleSearch.bind(this)}>
            Search
          </button>
        </header>
        {this.state.showBasic && 
          <BasicInfo name={this.state.input} starWarsPeople={starWarsPeople}/>}
      </div>
    );
  }
}
