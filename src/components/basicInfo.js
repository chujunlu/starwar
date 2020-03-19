import React from 'react';
import HomeworldInfo from './HomeworldInfo';
import ListItems from './ListItems';
import './Info.css'

export default class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showHomeworld: false };
  }

  findPerson(name, people) {
    return people.find(person => person.name === name );
  }

  handleShowHomeworld() {
    this.setState({ showHomeworld: true });
  }

  render() {
    const { name, starWarsPeople } = this.props;
    if (!starWarsPeople) return null;
    const person = this.findPerson(name, starWarsPeople);

    if (person) {
      document.title = name;

      return (
        <div>
          <div>
            <h2>Basic Info</h2>
            {<ListItems obj={person}/>}
          </div>
          <div>
            <button onClick={this.handleShowHomeworld.bind(this)}>
              Show my homeworld
            </button>
          </div>
          {this.state.showHomeworld && 
            <HomeworldInfo
              homeworldUrl={person.homeworld}
              name={name}
            />}
        </div>
      );
    } else {
      document.title = 'Not found';
      return (
        <div>
          <p>Not found</p>
        </div>
      );
    }
  }
}
