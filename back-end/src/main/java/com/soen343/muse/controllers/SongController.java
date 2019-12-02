package com.soen343.muse.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.soen343.muse.models.Song;
import com.soen343.muse.repositories.SongRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/api/songs")
public class SongController {


    @Autowired
    private SongRepo songRepo;

    /** return songs */
    @RequestMapping(value = {"", "/"}, produces = "application/json", method = RequestMethod.GET)
    public List<Song> getSongs(@RequestParam Map<String, String> params) {  
        
        String title = params.getOrDefault("title", "");
        String artist = params.getOrDefault("artist", "");
        String album = params.getOrDefault("album", "");
        
        if (!title.isEmpty() && !artist.isEmpty() && !album.isEmpty()) {
            return songRepo.findByTitleAndArtist(title, artist);
        } else if (!title.isEmpty()) {
            return songRepo.findByTitle(title);
        } else if (!artist.isEmpty()) {
            return songRepo.findByArtist(artist);
        } else if (!album.isEmpty()) {
            return songRepo.findByAlbum(album);
        }

        return songRepo.findAll();
    }

    public void setSongRepo(SongRepo songRepo)
    {
        this.songRepo = songRepo;
    }

}
