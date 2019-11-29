import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import Song from '../model/Song';
import axios from 'axios';

const songMap = {
  "Africa" : "Africa.mp3",
  "Arab Money": "ArabMoney.mp3",
  "Kissed": "Kissed.mp3"
}

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs:[], // is an array but only one is received per the current DB
      title: '',
      artist: '',
      message: ''
    };
  }

    //form submission
    handleSubmit = (event) => {

    const {title, artist} = this.state;

    if(title && artist) {
        axios.get(`api/songs/?title=${title}&artist=${artist}`).then((res ) =>{
        let songs = (res.data.map(e => new Song(e)));
        this.setState({songs, message: songs.length > 0 ? 'we have found': 'no results :(, search something else'})
        })
    }else if (title) {
        axios.get(`api/songs/?title=${title}`).then((res)=>{
        let songs = (res.data.map(e => new Song(e)));
        this.setState({songs, message: songs.length > 0 ? 'we have found': 'no results :(, search something else'})
        })
    }else if (artist) {
        axios.get(`api/songs/?artist=${artist}`).then((res ) =>{
        let songs = (res.data.map(e => new Song(e)));
        this.setState({songs, message: songs.length > 0 ? 'we have found': 'no results :(, search something else'})
        })
    }

    event.preventDefault();
    return false;
    }

    handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
      const {songs, artist, title, message} = this.state;
      const isInvalid = artist ==='' && title === '';
    return (

        <span>
        <div>
            <h3>hey Omar, search for something</h3>
            <h5>our music library only contains:</h5>
            <ul>
            <li>
                Africa by Toto
            </li>
            <li>
                Arab Money by Busta Rhymes
            </li>
            <li>
                Kissed by Sun
            </li>
            </ul>
            <form onSubmit={this.handleSubmit}>
                    <label>
                    Title:
                    <input type="text" name="title" onChange={this.handleChange} className="App-form-input" />
                    </label>
                    <div>
                    <label>
                    Artist:
                    <input type="text" name="artist" onChange={this.handleChange} className="App-form-input" />
                    </label>
                    </div>
                    <input type="submit" value="Submit" disabled={isInvalid}/>
            </form>
            {message}
            <ul>
            {songs.map((song)=>(
                <li key={song.title}>
                {song.title} - {song.artist}
                </li>
            ))}
            </ul>
        </div>  
        
        
           <div>



           {songs && <ReactAudioPlayer
             src={songMap[title]}
             controls
           />}
   
         </div>
         </span>
    );
  }
}

export default SearchBar;



