import React, { Component } from 'react';
import SearchBar from './SearchBar';
import '../App.css';


class Home extends Component {
  render() {

    return (
      <SearchBar style={{padding: "50px"}} />
    );
  }
}

export default Home;
