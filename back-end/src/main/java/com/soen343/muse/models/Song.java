package com.soen343.muse.models;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Song {
    @Id
    private String id;

    private String title;
    private String artist;
    private String album;

    public Song() {
    }

    public Song(String title, String artist, String album) {
        this.title = title;
        this.artist = artist;   
        this.album = album;
    }

    
    public String getId() {
        return id;
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

    @Override
    public String toString() {
        return "Id: " + id + " | Title: " + title + " | Artist: " + artist;
    }



    
}
