import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }
  render() {
    return(
      <input onChange={e => console.log(e.target.value)} />
    );
  }
}
