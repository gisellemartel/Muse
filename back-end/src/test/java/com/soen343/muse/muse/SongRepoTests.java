package com.soen343.muse.muse;
import com.soen343.muse.MuseApplication;
import com.soen343.muse.controllers.SongController;
import com.soen343.muse.models.Song;
import com.soen343.muse.repositories.SongRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeAll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertTrue;
import java.util.HashMap;


@SpringBootTest
public class SongRepoTests {

	@Autowired
	private SongRepo songRepo;

	@BeforeAll
	public static void setUp()
	{
		SpringApplication.run(MuseApplication.class);
	}

	@Test
	public void testFindAll()
	{
		for (Song song : songRepo.findAll())
		{
			assertTrue(song != null);
		}
	}

	@Test
	public void testFindByArtistName()
	{
		for (Song song : songRepo.findByArtist("Busta Rhymes"))
		{
			assertTrue(song.getArtist().contains("Busta Rhymes"));
		}
	}

	@Test
	public void testFindByTitle()
	{
		for (Song song : songRepo.findByTitle("Bachelorette"))
		{
			assertTrue(song.getTitle().contains("Bachelorette"));
		}
	}

	@Test
	public void negativeTestFindByTitle()
	{
		assertTrue(songRepo.findByTitle("InvalidName").size() == 0);
	}

	@Test
	public void testFindByAlbumName()
	{
		for (Song song : songRepo.findByAlbum("Ege Bamyasi"))
		{
			assertTrue(song.getAlbum().contains("Ege Bamyasi"));
		}
	}

	@Test
	public void testFindByTitleAndArtist()
	{
		for (Song song : songRepo.findByTitleAndArtist("Auntie's Harp", "Flying Lotus"))
		{
			assertTrue(song.getArtist().contains("Flying Lotus"));
		}

	}

	@Test
	public void findByTitleOrArtist()
	{
		for (Song song : songRepo.findByTitleOrArtist("Optimistic", "Radiohead"))
		{
			assertTrue(song.getArtist().contains("Radiohead"));
		}

	}
}
