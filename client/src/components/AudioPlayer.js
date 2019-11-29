import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Song from '../model/Song';
import axios from 'axios';
import SearchBar from './SearchBar';


class AudioPlayer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div> This is the audio player component </div>
    );
  }
}

export default AudioPlayer;
