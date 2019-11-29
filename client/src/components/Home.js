import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AudioPlayer from './AudioPlayer';
import '../App.css';


class Home extends Component {
  render() {

    return (
      <span>
        <SearchBar />
        <AudioPlayer/>
      </span>
    );
  }
}

export default Home;
