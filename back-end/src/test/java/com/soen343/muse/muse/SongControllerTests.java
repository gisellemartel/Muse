package com.soen343.muse.muse;

import com.soen343.muse.controllers.SongController;
import com.soen343.muse.models.Song;
import com.soen343.muse.repositories.SongRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.assertTrue;


@SpringBootTest
public class SongControllerTests
{
	@Autowired
	private SongRepo songRepo;

	@MockBean
	private SongController songController;

	@Test
	public void testFetchSongs()
	{
		HashMap<String, String> params = new HashMap<String,String>();
		params.put("artist", "Toto");
		params.put("title", "Africa");
		for (Song song : songController.getSongs(params))
		{
			assertTrue(song.getArtist().contains("Toto"));
			assertTrue(song.getTitle().contains("Africa"));
		}
	}

	@Test
	public void negativeTestFetchSongs()
	{
		HashMap<String, String> params = new HashMap<String,String>();
		params.put("artist", "InvalidName");
		params.put("title", "Unknown");
		for (Song song : songController.getSongs(params))
		{
			assertTrue(songRepo.findByTitle("InvalidName").size() == 0);
		}
	}
}
