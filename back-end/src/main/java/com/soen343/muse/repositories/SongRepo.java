package com.soen343.muse.repositories;

import java.util.List;

import com.soen343.muse.models.Song;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface SongRepo extends MongoRepository<Song, String>
{
     @Query(value = "{'title': {$regex : '^?0$', $options: 'i'}}")
     List<Song> findByTitle(String title);
 
     @Query(value = "{'artist': {$regex : '^?0$', $options: 'i'}}")
     List<Song> findByArtist(String artist);
 
     @Query(value = "{'title': {$regex : '^?0$', $options: 'i'}, 'artist': {$regex : '^?1$', $options: 'i'}}")
     List<Song> findByTitleAndArtist(String title, String artist);
 
     @Query("{'$or': [{'title': {$regex : '^?0$', $options: 'i'}}, {'artist': {$regex : '^?1$', $options: 'i'}}]}")
     List<Song> findByTitleOrArtist(String title, String artist);
}
