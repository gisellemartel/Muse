package com.soen343.muse.muse;

import com.soen343.muse.MuseApplication;
import com.soen343.muse.controllers.SongController;
import com.soen343.muse.models.Song;
import com.soen343.muse.repositories.SongRepo;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.assertTrue;


@SpringBootTest
public class SongControllerTests {

	@Autowired
	private SongRepo songRepo;

	@BeforeAll
	public static void setUp()
	{
		SpringApplication.run(MuseApplication.class);
	}

	@Test
	public void testFetchSongs()
	{
		SongController tester = new SongController();
		tester.setSongRepo(songRepo);
		HashMap<String, String> params = new HashMap<String,String>();
		params.put("artist", "Toto");
		params.put("title", "Africa");
		for (Song song : tester.getSongs(params))
		{
			assertTrue(song.getArtist().contains("Toto"));
			assertTrue(song.getTitle().contains("Africa"));
		}
	}

	@Test
	public void negativeTestFetchSongs()
	{
		SongController tester = new SongController();
		tester.setSongRepo(songRepo);
		HashMap<String, String> params = new HashMap<String,String>();
		params.put("artist", "InvalidName");
		params.put("title", "Unknown");
		for (Song song : tester.getSongs(params))
		{
			assertTrue(songRepo.findByTitle("InvalidName").size() == 0);
		}
	}
}
