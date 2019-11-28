import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Song from './model/Song';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    axios.get('/api/songs')
      .then(res => {
        let songs = (res.data.map(e => new Song(e)));
        this.setState({songs})
      });
  }

  render() {
    const {songs} = this.state;
    return (
      <div>
        <h1>fetched all songs</h1>
      <ul>
        {songs.map((song, index)=>(
          <div>
            <h2>Song {index + 1}</h2>
            <div>{song.title}</div>
            <div>{song.album}</div>
            <div>{song.artist}</div>
          </div>
        ))}
      </ul>
      </div>
    );
  }
}

export default App;
