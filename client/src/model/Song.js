class Song {
  constructor(data) {
    this.title = data.title;
    this.artist = data.artist;
    this.album = data.album;
  }

  isValid() {
    return this.title && this.artist;
  }

  toString() {
    return `[title: ${this.title}, artist: ${this.artist}, album: ${this.album}]`;
  }
}

export default Song;