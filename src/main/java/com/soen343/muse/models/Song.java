package com.soen343.muse.models;

import org.springframework.data.annotation.Id;

public class Song
{
    @Id
    private String id;

    private String songName;
    private String artist;
    private String album;

    public Song() {}

    public Song(String songName, String artist, String album) {
        this.songName = songName;
        this.artist = artist;
        this.album = album;
    }

    @Override
    public String toString() {
        return "Id: "+id +" | Title: "+songName+" | Artist: "+artist;
    }
}
