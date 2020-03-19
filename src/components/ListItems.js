import React from 'react';

function ListItem(props) {
  return <li>{props.property}: {props.value}</li>
}

function ListItems({ obj }) {
  const listItems = [];
  for (const prop in obj) {
    if (typeof obj[prop] === 'string') {
      listItems.push(<ListItem key={prop} property={prop} value={obj[prop]}/>);
    }
  }

  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default ListItems;