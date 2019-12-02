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
public class MuseApplicationTests {

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
		for (Song song : songRepo.findAll()) {
			System.out.println(song);
			assertTrue(song != null);
		}
	}

	@Test
	public void testFindByArtistName()
	{
		for (Song song : songRepo.findByArtist("Busta Rhymes"))
		{
			System.out.println(song);
			assertTrue(song != null);
		}
	}

	@Test
	public void testFindByTitle()
	{
		for (Song song : songRepo.findByTitle("Bachelorette"))
		{
			System.out.println(song);
			assertTrue(song != null);
		}
	}

	@Test
	public void negativeTestFindByTitle()
	{
		for (Song song : songRepo.findByTitle("InvalidName"))
		{
			System.out.println("Hello" + song);
			assertTrue(song != null);
		}
	}

	@Test
	public void testFindByAlbumName()
	{
		for (Song song : songRepo.findByAlbum("Ege Bamyasi"))
		{
			System.out.println(song);
			assertTrue(song != null);
		}
	}

	@Test
	public void testFindByTitleAndArtist()
	{
		for (Song song : songRepo.findByTitleAndArtist("Auntie's Harp", "Flying Lotus"))
		{
			System.out.println(song);
			assertTrue(song != null);
		}
	}

	@Test
	public void findByTitleOrArtist() {
		for (Song song : songRepo.findByTitleOrArtist("Optimistic", "Radiohead")) {
			System.out.println(song);
			assertTrue(song != null);
		}

	}

	@Test
	public void fetchSongs()
	{
		SongController tester = new SongController();
		tester.setSongRepo(songRepo);
		HashMap<String, String> params = new HashMap<String,String>();
		params.put("artist", "Toto");
		params.put("title", "Africa");
		for (Song song : tester.getSongs(params))
		{
			System.out.println(song);
			assertTrue(song != null);
		}
	}

}
