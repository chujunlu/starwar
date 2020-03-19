import React from 'react';
import ListItems from './ListItems';
import { readJSON } from '../assets/utilities';

export default class HomeworldInfo extends React.Component {
  render() {
    const { name, homeworldUrl } = this.props;

    if (!localStorage.getItem(homeworldUrl)) {
      const result = readJSON(homeworldUrl);
      localStorage.setItem(homeworldUrl, result);
    }

    const homeworld = JSON.parse(localStorage.getItem(homeworldUrl));
    document.title = name + ' ' + homeworld.name;

    return (
      <div>
        <h2>Homeworld Info</h2>
        {<ListItems obj={homeworld}/>}
      </div>
    );
  }
}
