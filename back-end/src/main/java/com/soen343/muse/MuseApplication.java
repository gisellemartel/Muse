package com.soen343.muse;

import com.soen343.muse.models.Song;
import com.soen343.muse.repositories.SongRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MuseApplication implements CommandLineRunner
{
	@Autowired
	private SongRepo songRepo;

	public static void main(String[] args)
	{
		SpringApplication.run(MuseApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception
	{
		
		songRepo.deleteAll();

		songRepo.save(new Song("Africa", "Toto",""));
		songRepo.save(new Song("Arab Money", "Busta Rhymes", ""));
		songRepo.save(new Song("Kissed", "Sun",""));
		

		System.out.println("finding all");
		for (Song song : songRepo.findAll())
		{
			System.out.println(song);
		}

		System.out.println("Name");

		System.out.println("Artist");
		for (Song song : songRepo.findByArtist("Busta Rhymes"))
		{
			System.out.println(song);
		}
	}
}
