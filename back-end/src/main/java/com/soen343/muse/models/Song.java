package com.soen343.muse.models;


import org.springframework.data.annotation.Id;


public class Song {
    @Id
    private String id;

    private String title;
    private String artist;
    private String album;
    private String cover;
    private String mp3;


    public Song() {
    }

    public Song(String title, String artist, String album, String cover, String mp3) {
        this.title = title;
        this.artist = artist;   
        this.album = album;
        this.cover = cover;
        this.mp3 = mp3;
    }

    
    public String getId() {
        return id;
    }

    public String getMp3() {
        return mp3;
    }

    
    public String getAlbum() {
        return album;
    }

    
    public String getTitle() {
        return title;
    }

    
    public String getArtist() {
        return artist;
    }


    public String getCover() { return cover; }


    @Override
    public String toString() {
        return "Id: " + id + " | Title: " + title + " | Artist: " + artist + " | Album: " + album;
    }



    
}
