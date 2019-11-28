package com.soen343.muse.repositories;
import java.util.List;

import com.soen343.muse.models.Song;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SongRepo extends MongoRepository<Song, String>
{
     List<Song> findByArtist(String artist);
}
