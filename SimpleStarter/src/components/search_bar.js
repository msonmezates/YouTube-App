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
      <div>
        <input onChange={e => this.setState({ searchTerm: e.target.value })} />
      </div>
    );
  }
}
